import React from "react";

// * this is how I created threads
// const createThreads = async () => {
//   const provider = await Box.get3idConnectProvider();
//   const box = await Box.create(provider);
//   const address = process.env.REACT_APP_ADMIN; // this is the ethereum address of the admin
//   const spaces = ["wildcards"];
//   await box.auth(spaces, { address });
//   await box.syncDone;
//   const space = await box.openSpace("wildcards");
//   await space.syncDone;
//   const thread = await space.joinThread("SarahPangolin", {
//     firstModerator: process.env.REACT_APP_3ID,
//     members: true,
//   });
//   console.log(thread);
// };

// todo: add ability to log in here, as well as in the navbar
const MyProfile = () => {
  return (
    <div className="myProfile">
      <p>This is your 3Box profile &nbsp;&nbsp;</p>
    </div>
  );
};

export default MyProfile;
