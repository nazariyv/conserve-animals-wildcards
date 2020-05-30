import React from "react";

import { MY_PROFILE, SUBMIT, REVIEW } from "../../context/types";

const MenuItem = ({ menuName, setActiveMenu }) => {
  switch (menuName) {
    case MY_PROFILE:
      return (
        <div
          className="menuItem btn btn-light"
          onClick={setActiveMenu.bind(this, MY_PROFILE)}
        >
          My Profile
        </div>
      );
    case SUBMIT:
      return (
        <div
          className="menuItem btn btn-light"
          onClick={setActiveMenu.bind(this, SUBMIT)}
        >
          Submit Art
        </div>
      );
    case REVIEW:
      return (
        <div
          className="menuItem btn btn-light"
          onClick={setActiveMenu.bind(this, REVIEW)}
        >
          Review Submissions
        </div>
      );
    default:
      return <div>Error</div>;
  }
};

const Menu = ({ setActiveMenu }) => {
  return (
    <div className="artistMenu">
      <MenuItem menuName={MY_PROFILE} setActiveMenu={setActiveMenu} />
      <MenuItem menuName={SUBMIT} setActiveMenu={setActiveMenu} />
      <MenuItem menuName={REVIEW} setActiveMenu={setActiveMenu} />
    </div>
  );
};

export default Menu;
