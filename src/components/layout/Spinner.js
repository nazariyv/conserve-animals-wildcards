import React from "react";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => (
  <div
    className="sweet-loading"
    style={{ width: "100%", height: "100%", margin: "auto", display: "block" }}
  >
    <CircleLoader
      css={override}
      size={50}
      color={"rgb(115, 199, 215)"}
      loading={true}
    />
  </div>
);

export default Spinner;
