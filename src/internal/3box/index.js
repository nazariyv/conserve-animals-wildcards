const Box = require("3box");

// will create admin-artist chat
export const createArtistAdminChat = async ({ threadName, currentUser }) => {
  const provider = await Box.get3idConnectProvider();
  const box = await Box.create(provider);
  const address = process.env.REACT_APP_ADMIN; // this is the ethereum address of the admin
  const spaces = ["wildcards"];
  await box.auth(spaces, { address });
  await box.syncDone;
  const space = await box.openSpace("wildcards");
  await space.syncDone;
  const thread = await space.joinThread(threadName, {
    // ! the convention I use here is Role + Name, where name is the animal name
    firstModerator: process.env.REACT_APP_3ID, // this is admin's 3ID
    // members: true, // to create animal chat, set this to true
  });
  // await thread.addMember(currentUser);
  return thread;
};
