export const pinataToTable = ({ data }) => {
  if (!data) {
    return [];
  }

  console.log("data");
  console.log(data);

  return Object.values(data).map((v) => {
    console.log(v);

    return {
      createdOn: v.date_pinned,
      fileName: v.metadata.keyvalues.fileName,
      artName: v.metadata.keyvalues.artName,
      myComment: v.metadata.keyvalues.authorComment,
      status: v.metadata.keyvalues.reviewStatus,
      reviewersComment: v.metadata.kevalues.reviewersComment,
      resubmit: null, // todo: react component here?
    };
  });
};
