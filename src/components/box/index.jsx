import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { WILDCARDS } from "../../types";
import hash from "object-hash";

// import ChatBox from "../../vendor/3box-chatbox-react";

export default ({
  box,
  threadName,
  currentUserAddr,
  currentUser3BoxProfile,
  isPublicChat,
}) => {
  const [thread, setThread] = useState(null);
  const [dialogue, setDialogue] = useState(null);
  // isPublicChat can be used to create private chat with admin where the user can post comments
  // versus opening a public chat where the user can see all of the art submissions for an animal
  useEffect(() => {
    const openThread = async () => {
      const resolvedThread = await box.openThread(WILDCARDS, threadName, {
        firstModerator: process.env.REACT_APP_ADMIN,
        ghost: false,
      });
      const resolvedDialogue = await resolvedThread.getPosts();
      return { resolvedThread, resolvedDialogue };
    };
    openThread()
      .then(({ resolvedThread, resolvedDialogue }) => {
        console.log(resolvedDialogue);
        setThread(resolvedThread);
        setDialogue(resolvedDialogue);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [threadName, box]);

  return (
    <>
      {!dialogue && <Spinner />}
      <>
        <h2 style={{ margin: "1rem" }}>{threadName} Submissions</h2>
        <div
          style={{
            maxHeight: 400,
            maxWidth: 1000,
            overflowY: "auto",
            overflowX: "auto",
            border: "1px solid black",
            padding: "1rem",
            margin: "2rem 0",
          }}
        >
          {dialogue &&
            dialogue.map((message) => {
              console.log("message");
              console.log(message);
              return (
                <div key={hash(message)}>
                  <p>
                    {"Time: " + String(new Date(message.timestamp * 1000))}
                    <br />
                    {"Author: " +
                      message.author.split(":")[2].slice(0, 6) +
                      "..."}
                    <br />
                    {"Message: " +
                      (message.message.data
                        ? message.message.data
                        : message.message)}
                  </p>
                  <br />
                </div>
              );
            })}
        </div>
      </>
    </>
  );

  // ! peristent prop is missing from this component. I have tried to start refactoring it, but it is a nightmare
  // return (
  //   <>
  //     Please integrate 3box persistent chatbox / comments component / threads.
  //     See source code for guidance
  //   </>
  // <ChatBox
  //   // required
  //   spaceName={WILDCARDS}
  //   threadName={threadName}
  //   // Required props for context A) & B)
  //   box={box}
  //   currentUserAddr={currentUserAddr}
  //   // Required prop for context B)
  //   // loginFunction={handleLogin}
  //   // Required prop for context C)
  //   // ethereum={ethereum}
  //   // optional
  //   mute={false}
  //   popupChat
  //   showEmoji
  //   colorTheme="#181F21"
  //   currentUser3BoxProfile={currentUser3BoxProfile}
  //   // spaceOpts={}
  //   // threadOpts={}
  //   // agentProfile={
  //   //     chatName: "3Box",
  //   //     imageUrl: "https://imgur.com/RXJO8FD"
  //   // }
  //   // openOnMount={false}

  //   // enable Persistent Thread
  //   persistent={true}
  //   // open
  //   firstModerator={process.env.REACT_APP_ADMIN}
  //   // moderators={[process.env.REACT_APP_ADMIN]}
  //   // members={["0xp83F...", "0xu9i7..."]}
  // />
  // );
};
