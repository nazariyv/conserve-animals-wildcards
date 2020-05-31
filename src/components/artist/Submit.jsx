import React, { useCallback, useContext } from "react";

import Spinner from "../layout/Spinner";
import PinningContext from "../../context/pinning/context";

const Submit = () => {
  const {
    artName,
    authorComment,
    image,
    isPinning,
    isPinned,
    // pinMeta,
    onImage,
    onChange,
    pinArt,
  } = useContext(PinningContext);

  const tryAgain = useCallback(
    (e) => {
      e.target.name = "isPinned";
      e.target.value = null;
      onChange(e);
    },
    [onChange]
  );

  const artForm = useCallback(() => {
    if (isPinned === false) {
      return (
        <>
          <h2>Oops, something went wrong when uploading the art...</h2>
          <div style={{ width: "50%", height: "50%", margin: "5px" }}>
            <img
              src={"/assets/images/puppy.jpg"}
              alt="by Andrea Lightfoot on Unsplash"
            />
          </div>
          <input
            type="button"
            className="btn btn-danger"
            value="Try Again"
            onClick={tryAgain}
          />
        </>
      );
    }
    switch (isPinning) {
      case true:
        return <Spinner />;
      default:
        return (
          <form className="submitArtForm card" onSubmit={pinArt}>
            <>
              <label htmlFor="artName">Your masterpiece name (optional)</label>
              <input
                className="smallMargin"
                type="text"
                id="artName"
                value={artName}
                onChange={onChange}
              />
            </>
            <>
              <label htmlFor="artComments">Comments (optional)</label>
              <textarea
                className="smallMargin"
                id="artComments"
                value={authorComment}
                onChange={onChange}
              />
            </>
            <>
              <label htmlFor="art">Art file*</label>
              <p>
                <b>10 MB max size is supported</b>
              </p>
              <input
                type="file"
                id="art"
                name="art"
                accept=".gif,.jpg,.png"
                onChange={onImage}
              />
            </>
            <input
              type="submit"
              disabled={!image}
              className="btn btn-primary"
            />
            {/* unomment for image preview */}
            {/* {image && (
              <img alt="uploaded art" src={URL.createObjectURL(image)} />
            )} */}
          </form>
        );
    }
  }, [
    artName,
    authorComment,
    image,
    isPinning,
    onChange,
    pinArt,
    onImage,
    isPinned,
    tryAgain,
  ]);

  return <>{artForm()}</>;
};

export default Submit;
