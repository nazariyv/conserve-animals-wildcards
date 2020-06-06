import React from "react";
import ThreeBoxComments from "3box-comments-react";
import { WILDCARDS } from "../../types";

// todo: user clicks on the submission in the table to open a chat, i.e. dynamic threadName here
export default ({
  box,
  threadName,
  currentUserAddr,
  currentUser3BoxProfile,
  isAdminChat,
}) => {
  // console.log("---- box - -")
  // cons
  if (!box) {
    return <>No box provided</>;
  }
  return (
    <ThreeBoxComments
      // required
      spaceName={WILDCARDS}
      threadName={threadName}
      adminEthAddr={process.env.REACT_APP_ADMIN} // The Ethereum address you wish to give admin rights to for the Comments thread. This user will be able to delete all comments and accept members in a members-only thread. A thread with a new admin address, despite identical spaceName and threadName, will create an entirely new thread.
      // Required props for context A) & B)
      box={box}
      currentUserAddr={currentUserAddr}
      // Required prop for context B)
      // loginFunction={handleLogin}
      // optional
      // members={isAdminChat}
      members={false}
      showCommentCount={10}
      threadOpts={{}}
      useHovers={false}
      currentUser3BoxProfile={currentUser3BoxProfile}
      // userProfileURL={(address) => `https://mywebsite.com/user/${address}`}
    />
  );
};
