import React from "react";

// * this is how I created the threads
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

// you can add a bunch of user information like how many submissions they have made
// how much eth they have made
// how many times their art was resold, etc. etc.
const MyProfile = () => {
  return (
    <div className="myProfile">
      <p>This is your 3Box profile &nbsp;&nbsp;</p>
    </div>
  );
};

export default MyProfile;
