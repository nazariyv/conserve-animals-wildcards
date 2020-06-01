import React from "react";
import { useTable } from "react-table";

// todo: rewrite this table: https://codesandbox.io/s/r5n96yvwnm?file=/index.js:211-330
export default ({ columns, data }) => {
  if (!columns || !data) {
    return <></>;
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
  // todo: styling the components themselves is baaad
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
