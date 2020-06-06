import React, { useCallback, useContext } from "react";
import Select from "react-select";

import Spinner from "../layout/Spinner";
import PinningContext from "../../context/pinning/context";
import ThreeBoxContext from "../../context/three-box/context";
import PuppyError from "../../components/puppy-error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const { profile } = useContext(ThreeBoxContext);

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
      pinArt({ e, profile, artMeta: { artName, authorComment } });
    },
    [profile, pinArt, artName, authorComment]
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
              disabled={!image && !animal && "disabled"}
              className={
                !image && !animal
                  ? "btn btn-dark btn-disabled"
                  : "btn btn-primary"
              }
            />
            {isPinned && (
              <>
                <FontAwesomeIcon icon="checkSquare" /> Success, your art was
                uploaded
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
