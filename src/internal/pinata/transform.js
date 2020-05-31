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
      status: v.metadata.keyvalues.reviewStatus || null,
      reviewersComment: v.metadata.keyvalues.reviewersComment || "",
      resubmit: null, // todo: react component here?
    };
  });
};
