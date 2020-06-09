const Box = require("3box");

// ! you don't need to use this. we are using 3box-chatbox-react for the purpose of creating persistent threads. this is here purely for demonstration purposes on how you can create threads in pure javascript
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
    firstModerator: process.env.REACT_APP_ADMIN_3ID, // this is admin's 3ID
    // members: true, // to create animal chat, set this to true
  });
  // await thread.addMember(currentUser);
  return thread;
};
