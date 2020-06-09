import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
// import Box from "3box";

import Spinner from "../layout/Spinner";
import { getUserSubmissions } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import { USER } from "../../internal/pinata/types";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";
import Table from "../../components/table";
import ChatBox from "../../components/box";
import { WILDCARDS } from "../../types";

const Review = () => {
  const [loadingUserSubmissions, setLoadingUserSubmissions] = useState(true);
  const [userSubmissions, setUserSubmisisons] = useState([{}]);
  const [requestOK, setRequestOK] = useState(null);
  const [threadName, setThreadName] = useState(null);
  const [isAdminChat, setIsAdminChat] = useState(false);
  // const [boxProvider, setBoxProvider] = useState(null);
  const { profile, box, currentUser, isProviderSelected } = useContext(
    ThreeBoxContext
  );

  const OpenChat = (data) => {
    return (
      <button
        className="btn btn-light"
        onClick={() => {
          if (!data.value) {
            return;
          }
          setThreadName(data.value);
          setIsAdminChat(true);
        }}
      >
        Chat
      </button>
    );
  };

  const All = (data) => {
    return (
      <button
        className="btn btn-light"
        onClick={() => {
          if (!data.value) {
            return;
          }
          setThreadName(data.value);
          setIsAdminChat(false);
        }}
      >
        See
      </button>
    );
  };

  useEffect(() => {
    getUserSubmissions({ proofDid: profile.proof_did })
      .then((resp) => {
        if (!resp || resp.status !== 200) {
          setRequestOK(false);
        }
        setLoadingUserSubmissions(false);
        const table = pinataToTable({ data: resp.data, type: USER });
        setUserSubmisisons(table);
        setRequestOK(true);
      })
      .catch((e) => {
        console.log("something went wrong", e);
      });
  }, [profile.proof_did]);

  const columns = useMemo(
    () => [
      {
        Header: "Your Submissions",
        columns: [
          { Header: "Status", accessor: "status" },
          {
            Header: "Talk to Admin",
            accessor: "adminChat",
            Cell: OpenChat,
          },
          { Header: "All", accessor: "all", Cell: All },
          {
            Header: "Created On",
            accessor: "createdOn",
          },
          {
            Header: "File Name",
            accessor: "fileName",
          },
          { Header: "My Comment", accessor: "myComment" },
          { Header: "Art Name", accessor: "artName" },
          { Header: "Animal", accessor: "animal" },
          // *: this can be used to hook up resubmission process
          // *: you can add a hidden column with id of the submission here
          // {
          //   Header: "Resubmit",
          //   accessor: "resubmit",
          //   Cell: Resubmit,
          //   getProps: () => ({ resubmitFunc: () => alert("resubmitted") }),
          // },
        ],
      },
    ],
    []
  );

  const authBox = useCallback(async () => {
    await box.auth([WILDCARDS], { address: currentUser });
    await box.syncDone;
    const space = await box.openSpace(WILDCARDS);
    await space.syncDone;
  }, [currentUser, box]);

  const getComments = useCallback(() => {
    authBox();
    return (
      <ChatBox
        box={box}
        currentUserAddr={currentUser}
        // isAdminChat={isAdminChat}
        threadName={threadName} // * this will depend on which row the user clicks in the table
        currentUser3BoxProfile={profile}
      />
    );
    // }, [threadName, box, currentUser, profile]);
  }, [threadName, box, currentUser, profile, authBox]);

  const reviewPage = () => {
    switch (loadingUserSubmissions) {
      case true:
        return <Spinner />;
      default:
        return (
          <>
            <>
              <p>
                To talk to admin about specific art, click on the cell in a
                table corresponding to that art in the column "Talk to Admin"
              </p>
              <br />
              <p>
                To see all submissions for a particular animal that you have
                made a submission to, click in the corresponding cell in column
                "All"
              </p>
              <br />
              <div
                style={{
                  maxHeight: 400,
                  overflowX: "scroll",
                  overflowY: "scroll",
                }}
              >
                <Table columns={columns} data={userSubmissions} />
              </div>
            </>
            <>
              <hr />
              <p style={{ margin: "3rem 0" }}>
                This is where you will be able to communicate with admins /
                observe other artists' submissions
              </p>
              {box && threadName && profile && getComments()}
            </>
          </>
        );
    }
  };
  return <>{requestOK === null || requestOK ? reviewPage() : <PuppyError />}</>;
};

export default Review;
