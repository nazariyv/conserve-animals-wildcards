import React, { useCallback, useContext, useState, useEffect } from "react";
import Select from "react-select";

import Spinner from "../layout/Spinner";
import PinningContext from "../../context/pinning/context";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WILDCARDS } from "../../types";

const Submit = () => {
  const {
    artName,
    animal,
    authorComment,
    isPinning,
    isPinned,
    image,
    // pinMeta,
    onImage,
    onChange,
    pinArt,
    animalOptions,
    onSelectChange,
  } = useContext(PinningContext);

  const { profile, box, currentUser, isProviderSelected } = useContext(
    ThreeBoxContext
  );

  // todo: create context for threads. you can see that we are pulling the thread
  // todo: in components/box/index.jsx as well
  const [thread, setThread] = useState(null);

  useEffect(() => {
    const openThread = async () => {
      const resolvedThread = await box.openThread(WILDCARDS, animal.value, {
        firstModerator: process.env.REACT_APP_ADMIN,
        ghost: false,
      });
      return resolvedThread;
    };
    openThread()
      .then((resThread) => {
        setThread(resThread);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [animal, box]);

  const submitTo3box = useCallback(
    (msg) => {
      if (!thread) {
        return;
      }
      const postToThread = async () => {
        const resp = await thread.post(JSON.stringify(msg));
        return resp;
      };
      postToThread()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [thread]
  );

  const tryAgain = useCallback(
    (e) => {
      e.target.name = "isPinned";
      e.target.value = null;
      onChange(e);
    },
    [onChange]
  );

  // todo: throttle the submission
  const onSubmit = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
      }
      const m = {
        profile,
        artMeta: {
          artName,
          authorComment,
          animalID: animal.value,
        },
      };
      pinArt({ profile: m.profile, artMeta: m.artMeta })
        .then((pinMeta) => {
          submitTo3box({ messageData: pinMeta.data, artMeta: m.artMeta });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [profile, pinArt, artName, authorComment, animal.value, submitTo3box]
  );

  const artForm = useCallback(() => {
    if (isPinned === false) {
      return <PuppyError onClick={tryAgain} />;
    }
    switch (isPinning) {
      case true:
        return <Spinner />;
      default:
        return (
          <form className="submitArtForm card" onSubmit={onSubmit}>
            <>
              <label htmlFor="artName">Your masterpiece name</label>
              <input
                className="smallMargin"
                type="text"
                id="artName"
                name="artName" // ! DO NOT CHANGE, state is hooked up to the name
                value={artName}
                onChange={onChange}
                placeholder="optional..."
              />
            </>
            <>
              <label htmlFor="artComment">Want to tell us something?</label>
              <textarea
                style={{
                  maxWidth: "100%",
                  minWidth: "50px",
                  minHeight: "50px",
                }}
                className="smallMargin"
                name="authorComment" // ! DO NOT CHANGE
                id="artComment"
                value={authorComment}
                onChange={onChange}
                placeholder="optional..."
              />
            </>
            <>
              <label style={{ margin: "1rem 0" }}>
                Please select an animal for which you are making a submission
              </label>
              <Select
                name="animal"
                className="animal-select"
                value={animal}
                onChange={onSelectChange}
                placeholder="Select the animal for submission"
                options={animalOptions}
              />
            </>
            <>
              <label htmlFor="image" className="custom-file-upload">
                Please select the file to upload &nbsp;
                <FontAwesomeIcon icon="upload" />
              </label>
              {image && (
                <div
                  style={{
                    marginTop: "0.1rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "80%",
                  }}
                >
                  {"Uploading " + image.name}
                </div>
              )}
              <input
                type="file"
                id="image"
                name="image" // ! DO NOT CHANGE
                accept=".gif,.jpg,.png"
                onChange={onImage}
              />
            </>
            <input
              type="submit"
              disabled={!image && !animal.value && "disabled"}
              className={
                !image && !animal.value
                  ? "btn btn-dark btn-disabled"
                  : "btn btn-primary"
              }
            />
            {isPinned && (
              <>
                <FontAwesomeIcon icon="check" /> Uploaded successfully
              </>
            )}
            {/* unomment for image preview */}
            {/* {image && (
              <img alt="uploaded art" src={URL.createObjectURL(image)} />
            )} */}
          </form>
        );
    }
  }, [
    image,
    artName,
    authorComment,
    isPinning,
    onChange,
    onImage,
    onSubmit,
    isPinned,
    tryAgain,
    animal,
    animalOptions,
    onSelectChange,
  ]);

  return <>{artForm()}</>;
};

export default Submit;
