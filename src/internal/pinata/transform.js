import React from "react";
import { IN_REVIEW, APPROVED, REJECTED, IMPROVE } from "./types";
import { USER, ADMIN } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getSubmissionStatus = ({ status }) => {
  switch (status) {
    case IN_REVIEW:
      return (
        <>
          <FontAwesomeIcon icon="history" />
          <br />
          In Review
        </>
      );
    case APPROVED:
      return (
        <>
          <FontAwesomeIcon icon="checkSquare" />
          <br />
          Approved
        </>
      );
    case REJECTED:
      return (
        <>
          <FontAwesomeIcon icon="times" />
          <br />
          Rejected
        </>
      );
    case IMPROVE:
      return (
        <>
          <FontAwesomeIcon icon="edit" />
        </>
      );
    default:
      return null;
  }
};

export const pinataToTable = ({ data, type }) => {
  if (!data || !type) {
    return [{}];
  }
  let out;
  if (type === USER) {
    out = Object.values(data.rows).map((v) => {
      const { keyvalues } = v.metadata;
      return {
        createdOn: v.date_pinned || "1970-01-01T00:00:00.0000Z",
        fileName: keyvalues.fileName || "",
        artName: keyvalues.artName || "",
        myComment: keyvalues.authorComment || "",
        status: getSubmissionStatus({
          status: keyvalues.status,
        }),
        reviewersComment: keyvalues.reviewersComment || "",
        resubmit: null, // todo: react component here?
      };
    });
  } else if (type === ADMIN) {
    out = Object.values(data.rows).map((v) => {
      const { keyvalues } = v.metadata;
      return {
        createdOn: v.date_pinned || "1970-01-01T00:00:00.0000Z",
        fileName: keyvalues.fileName || "",
        artName: keyvalues.artName || "",
        myComment: keyvalues.authorComment || "",
        status: getSubmissionStatus({
          status: keyvalues.status,
        }),
        reviewersComment: keyvalues.reviewersComment || "",
        id: v.id || "",
        ipfs_pin_hash: v.ipfs_pin_hash || "",
        size: v.size || "",
        user_id: v.user_id || "",
      };
    });
  }
  return out;
};
