import React, { useMemo, useState, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";

import { getUserSubmissions } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import { USER } from "../../internal/pinata/types";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";
import Table from "../../components/table";
import BoxChat from "../../components/box";

const Review = () => {
  const [loadingUserSubmissions, setLoadingUserSubmissions] = useState(true);
  const [userSubmissions, setUserSubmisisons] = useState([{}]);
  const [requestOK, setRequestOK] = useState(null);
  const { profile, box, space } = useContext(ThreeBoxContext);

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
            Header: "Created On",
            accessor: "createdOn",
          },
          {
            Header: "File Name",
            accessor: "fileName",
          },
          { Header: "Art Name", accessor: "artName" },
          { Header: "My Comment", accessor: "myComment" },
          { Header: "Reviewer's Comment", accessor: "reviewersComment" },
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

  const reviewPage = () => {
    switch (loadingUserSubmissions) {
      case true:
        return <Spinner />;
      default:
        // ! TODO: THIS has to be current user's address
        if (box && space) {
          return (
            <BoxChat
              box={box}
              currentUserAddr={process.env.REACT_APP_ADMIN}
              currentUser3BoxProfile={profile}
              // handleLogin={boxLogin}
              threadName="VitalikGorilla" // todo: this will depend on which row the user clicks in the table
            />
          );
        } else {
          return <Table columns={columns} data={userSubmissions} />;
        }
    }
  };

  return <>{requestOK === null || requestOK ? reviewPage() : <PuppyError />}</>;
};

export default Review;
