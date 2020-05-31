import React, { useMemo } from "react";

import { useTable } from "react-table";
import makeData from "./makeData";

// todo: tbody max height + overflow scrolling
const Review = ({ columns, data }) => {
  const cols = useMemo(
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

  const dat = React.useMemo(() => makeData(40), []);

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: cols, // ! todo: get rid of this
    data: dat,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Review;
