import React, { useMemo, useState, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";

import { useTable } from "react-table";
import { getUserSubmissions } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";

// const Resubmit = (value) => {
//   console.log(value);
//   return (
//     <div style={{ backgroundColor: "yellow", height: "10px" }}></div>
//     // <a href="#" onClick={resubmitFunc}>
//     //   {value}
//     // </a>
//   );
// };

// todo: rewrite this table: https://codesandbox.io/s/r5n96yvwnm?file=/index.js:211-330
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
        const table = pinataToTable({ data: resp.data });
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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: userSubmissions,
  });

  // todo: add the pulled submissions to local storage
  const reviewPage = () => {
    switch (loadingUserSubmissions) {
      case true:
        return <Spinner />;
      default:
        return (
          <table
            {...getTableProps()}
            className="pure-table"
            style={{
              display: "inline-block",
              overflowY: "auto",
              maxHeight: "800px",
              minWidth: "800px",
              width: "1100px",
              maxWidth: "1600px",
            }}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, j) => {
                      return (
                        <td {...cell.getCellProps()}>
                          <div>{cell.render("Cell")}</div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
    }
  };

  // Render the UI for your table
  // todo: need to hook up this component's state to the below puppy
  return <>{requestOK === null || requestOK ? reviewPage() : <PuppyError />}</>;
};

export default Review;
