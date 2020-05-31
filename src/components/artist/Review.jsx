import React, { useMemo, useState, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";

import { useTable } from "react-table";
import { getUserSubmissions } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import ThreeBoxContext from "../../context/three-box/context";

// todo: tbody max height + overflow scrolling
const Review = () => {
  const [loadingUserSubmissions, setLoadingUserSubmissions] = useState(true);
  const [userSubmissions, setUserSubmisisons] = useState([{}]);
  const [requestOK, setRequestOK] = useState(null);
  const { profile } = useContext(ThreeBoxContext);

  useEffect(() => {
    const resp = getUserSubmissions({ proofDid: profile.proof_did });
    console.log("resp");
    console.log(resp);
    console.log("profile");
    console.log(profile);
    if (!resp || resp.status !== 200) {
      setRequestOK(false);
    }
    setLoadingUserSubmissions(false);
    const table = pinataToTable(resp);
    console.log("table");
    console.log(table);
    setUserSubmisisons({});
    setRequestOK(true);
    /* eslint-disable */
  }, [profile.proof_did]);

  const columns = useMemo(
    () => [
      {
        Header: "Your Submissions",
        columns: [
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
          { Header: "Status", accessor: "status" },
          { Header: "Reviewer's Comment", accessor: "reviewersComment" },
          { Header: "Resubmit", accessor: "resubmit" },
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
    data: [{}],
  });

  const reviewPage = () => {
    switch (loadingUserSubmissions) {
      case true:
        return <Spinner />;
      default:
        return (
          <table {...getTableProps()}>
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
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
  return (
    <>
      {requestOK === null || requestOK ? (
        reviewPage()
      ) : (
        <>
          <h2>puppy error</h2>
        </>
      )}
    </>
  );
};

export default Review;
