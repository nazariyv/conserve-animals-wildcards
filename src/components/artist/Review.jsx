import React, { useMemo, useState, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";

import { getUserSubmissions } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import { USER } from "../../internal/pinata/types";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";
import Table from "../../components/table";

// const Resubmit = (value) => {
//   console.log(value);
//   return (
//     <div style={{ backgroundColor: "yellow", height: "10px" }}></div>
//     // <a href="#" onClick={resubmitFunc}>
//     //   {value}
//     // </a>
//   );
// };

const Review = () => {
  const [loadingUserSubmissions, setLoadingUserSubmissions] = useState(true);
  const [userSubmissions, setUserSubmisisons] = useState([{}]);
  const [requestOK, setRequestOK] = useState(null);
  const { profile } = useContext(ThreeBoxContext);

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
    /* eslint-disable */
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
          // todo: this can be used to hook up resubmission process
          // todo: you can add a hidden column with id of the submission here
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

  // Use the state and functions returned from useTable to build your UI

  // todo: add the pulled submissions to local storage
  const reviewPage = () => {
    switch (loadingUserSubmissions) {
      case true:
        return <Spinner />;
      default:
        return <Table columns={columns} data={userSubmissions} />;
    }
  };

  // Render the UI for your table
  // todo: need to hook up this component's state to the below puppy
  return <>{requestOK === null || requestOK ? reviewPage() : <PuppyError />}</>;
};

export default Review;
