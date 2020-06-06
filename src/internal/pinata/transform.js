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
          <FontAwesomeIcon icon="check" />
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
          <br />
          Open chat with admin
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
      // todo: need to pull the artist - admin thread hash here
      return {
        createdOn: v.date_pinned || "1970-01-01T00:00:00.0000Z",
        fileName: keyvalues.fileName || "",
        artName: keyvalues.artName || "",
        myComment: keyvalues.authorComment || "",
        adminChat: keyvalues.animalID || "",
        all: keyvalues.animalID || "",
        animal: keyvalues.animalID || "",
        status: getSubmissionStatus({
          status: keyvalues.status,
        }),
        resubmit: null, // todo: react component here?
      };
    });
  } else if (type === ADMIN) {
    // ! todo: add actual art, and put it into <img ..>
    // ! todo: need to pull the artist - admin thread hash here
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
        id: v.id || "",
        ipfs_pin_hash: v.ipfs_pin_hash || "",
        size: v.size || "",
        user_id: v.user_id || "",
      };
    });
  }
  return out;
};
