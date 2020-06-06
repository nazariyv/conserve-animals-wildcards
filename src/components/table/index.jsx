import React from "react";
import { useTable } from "react-table";

// if you plan to stick with react-table, see:
// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/pagination-controlled
// for pagination
export default ({ columns, data }) => {
  if (!columns || !data) {
    return <>Table has no data</>;
  }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <>
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
    </>
  );
};
