import React, { useCallback, useState } from "react";

// todo: validation
// forbid submitting, unless all the conditions are satisfied

const Submit = () => {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("form submitted"); // todo: remove
  }, []);

  const [artName, setArtName] = useState("");
  const [comments, setComments] = useState("");
  const [image, setImage] = useState(null);

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
      setImage(e.target.value); // todo: is this right?
    },
    [setImage]
  );

  return (
    <form className="submitArtForm card" onSubmit={onSubmit}>
      <>
        <label for="artName">Your masterpiece name (optional)</label>
        <input
          type="text"
          id="artName"
          value={artName}
          onChange={onArtNameChange}
        />
      </>
      <>
        <label for="artComments">Comments (optional)</label>
        <textarea
          id="artComments"
          value={comments}
          onChange={onCommentChange}
        />
      </>
      <>
        <label for="image">Art file * (.gif, .jpg and .png supported)</label>
        <p>10 MB max size is supported</p>
        <input
          type="file"
          id="image"
          name="image"
          accept=".gif,.jpg,.png"
          value={image}
          onChange={onImageUpload}
        />
      </>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default Submit;
