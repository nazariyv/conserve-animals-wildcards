import React, { useCallback } from "react";

export default ({ onClick }) => {
  const click = useCallback(() => {
    console.log("unimplemented");
  }, []);

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
        onClick={(onClick && onClick) || click}
      />
    </>
  );
};
