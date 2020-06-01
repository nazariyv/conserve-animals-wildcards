import React from "react";
import { IN_REVIEW, APPROVED, REJECTED, IMPROVE } from "./types";

const getSubmissionStatus = ({ status }) => {
  switch (status) {
    case IN_REVIEW:
      return (
        <>
          <i class="fas fa-history"></i>
          <br />
          In Review
        </>
      );
    case APPROVED:
      return (
        <>
          <i class="far fa-thumbs-up"></i>
          <br />
          Approved
        </>
      );
    case REJECTED:
      return (
        <>
          <i class="fas fa-times"></i>
          <br />
          Rejected
        </>
      );
    case IMPROVE:
      return (
        <>
          <i class="fas fa-edit">Resubmit</i>Resubmit
        </>
      );
    default:
      return null;
  }
};

export const pinataToTable = ({ data }) => {
  if (!data) {
    return [{}];
  }
  return Object.values(data.rows).map((v) => {
    return {
      createdOn: v.date_pinned || "1970-01-01T00:00:00.0000Z",
      fileName: v.metadata.keyvalues.fileName || "",
      artName: v.metadata.keyvalues.artName || "",
      myComment: v.metadata.keyvalues.authorComment || "",
      status: getSubmissionStatus({
        status: v.metadata.keyvalues.status,
      }),
      reviewersComment: v.metadata.keyvalues.reviewersComment || "",
      resubmit: null, // todo: react component here?
    };
  });
};
