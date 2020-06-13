import React from "react";
import ChatBox from "3box-chatbox-react-enhanced";
import { WILDCARDS } from "../../types";

export default ({
  box,
  threadName,
  currentUserAddr,
  currentUser3BoxProfile,
}) => (
  <ChatBox
    spaceName={WILDCARDS}
    threadName={threadName}
    box={box}
    currentUserAddr={currentUserAddr}
    mute={false}
    popupChat
    showEmoji
    colorTheme="#181F21"
    currentUser3BoxProfile={currentUser3BoxProfile}
    openOnMount={false}
    persistent
    firstModerator={process.env.REACT_APP_ADMIN}
    // moderators={["0xp83F..."]}
    // members={["0xp83F...", "0xu9i7..."]}
  />
);
