import React, { useEffect, useState, useCallback } from "react";
import Table from "../../components/table";

import { getAllSubmissions, modifyPin } from "../../internal/pinata";
import { pinataToTable } from "../../internal/pinata/transform";
import { ADMIN, APPROVED } from "../../internal/pinata/types";
import Spinner from "../layout/Spinner";

export default ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [allSubmissions, setAllSubmissions] = useState(null);
  const [reviewersComment, setReviewersComment] = useState("Looks Awesome!");
  const [status, setStatus] = useState(APPROVED);
  const [didChange, setDidChange] = useState(null);

  useEffect(() => {
    if (match.params.pwd === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAdmin(true);
      getAllSubmissions().then((resp) => {
        if (!resp || resp.status !== 200) {
          return;
        }
        const table = pinataToTable({ data: resp.data, type: ADMIN });
        setAllSubmissions(table);
      });
      setIsLoading(false);
    }
    /* eslint-disable */
  }, []);

  const modifyIt = ({ cellInfo }) => {
    const ipfsPinHash = cellInfo.cell.row.original.ipfs_pin_hash;
    modifyPin({
      ipfsPinHash,
      newKeyValues: { status, reviewersComment },
    }).then((data) => {
      setDidChange(JSON.stringify(data));
    });
  };

  // todo: not DRY because admins may have different table
  const columns = [
    {
      Header: "Your Submissions",
      columns: [
        {
          Header: "Edit Pin",
          accessor: "editPin",
          Cell: (cellInfo) => {
            return (
              <i
                className="fas fa-file-medical"
                onClick={() => {
                  modifyIt({ cellInfo });
                }}
              />
            );
          },
        },
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
        { Header: "Pin Id", accessor: "id" },
        { Header: "IPFS Pin Hash", accessor: "ipfs_pin_hash" },
        { Header: "File size", accessor: "size" },
        { Header: "User ID", accessor: "user_id" },
        //   { Header: "Proof Did", accessor: "proofDid" },
      ],
    },
  ];

  const content = useCallback(() => {
    switch (isAdmin) {
      case true:
        switch (isLoading) {
          case false:
            return (
              <>
                <h1>Welcome almighty and glorious Wildcards admin!</h1>

                <h2>
                  This is your control panel, despite its poor look it can
                  accomplish great things!
                </h2>
                <p>
                  Write a comment / select the status, and then click on the
                  icon to change the pin
                </p>
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => {
                    e.preventDefault();
                    setStatus(e.target.value);
                  }}
                >
                  <option value="APPROVED">APPROVED</option>
                  <option value="REJECTED">REJECTED</option>
                  <option value="IMPROVE">IMPROVE</option>
                </select>
                <input
                  type="text"
                  value={reviewersComment}
                  onChange={(e) => {
                    e.preventDefault();
                    setReviewersComment(e.target.value);
                  }}
                />
                <Table data={allSubmissions} columns={columns} />
                <textarea
                  disabled
                  value={didChange || ""}
                  onChange={() => {}}
                />
              </>
            );
          default:
            return <Spinner />;
        }

      default:
        return <>Unauthorized</>;
    }
  });

  return <>{content()}</>;
};
