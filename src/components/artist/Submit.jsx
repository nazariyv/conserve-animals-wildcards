import React, { useCallback, useState } from "react";

import Spinner from "../layout/Spinner";
import { pinToIPFS } from "../../internal/pinata";

// todo: validation
// forbid submitting, unless all the conditions are satisfied

const Submit = () => {
  const [artName, setArtName] = useState("");
  const [comments, setComments] = useState("");
  const [image, setImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imgIsPinning, setImgIsPinning] = useState(false);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!image) {
        return;
      }
      setImgIsPinning(true);
      const resp = await pinToIPFS({ file: image });
      console.log("pinned", resp);
      setImgIsPinning(false);
    },
    [image]
  );

  const onArtNameChange = useCallback(
    (e) => {
      setArtName(e.target.value);
    },
    [setArtName]
  );

  const onCommentChange = useCallback(
    (e) => {
      setComments(e.target.value);
    },
    [setComments]
  );

  const onImageUpload = useCallback(
    (e) => {
      setImageUploading(true);
      setImage(e.target.files[0]);
      setImageUploading(false);
    },
    [setImage]
  );

  const artForm = useCallback(() => {
    switch (imgIsPinning) {
      case true:
        return <Spinner />;
      default:
        return (
          <form className="submitArtForm card" onSubmit={onSubmit}>
            <>
              <label htmlFor="artName">Your masterpiece name (optional)</label>
              <input
                type="text"
                id="artName"
                value={artName}
                onChange={onArtNameChange}
              />
            </>
            <>
              <label htmlFor="artComments">Comments (optional)</label>
              <textarea
                id="artComments"
                value={comments}
                onChange={onCommentChange}
              />
            </>
            <>
              <label htmlFor="image">
                Art file * (.gif, .jpg and .png supported)
              </label>
              <p>10 MB max size is supported</p>
              <input
                type="file"
                id="image"
                name="image"
                accept=".gif,.jpg,.png"
                onChange={onImageUpload}
              />
            </>
            <input type="submit" className="btn btn-primary" />
            {image && (
              <img alt="uploaded art" src={URL.createObjectURL(image)} />
            )}
          </form>
        );
    }
  }, [
    artName,
    comments,
    image,
    onArtNameChange,
    onCommentChange,
    onImageUpload,
    onSubmit,
    imgIsPinning,
  ]);

  const content = useCallback(() => {
    switch (imageUploading) {
      case true:
        return <Spinner />;
      case false:
        return <>{artForm()}</>;
      default:
        throw new Error("Unknown error in Submit component");
    }
  }, [artForm, imageUploading]);

  return <>{content()}</>;
};

export default Submit;
