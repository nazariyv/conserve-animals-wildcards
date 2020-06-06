import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import MyProfile from "../artist/MyProfile";
import Submit from "../artist/Submit";
import Menu from "../artist/Menu";
import Review from "../artist/Review";
import { MY_PROFILE, REVIEW, SUBMIT } from "../../types";
import PinningState from "../../context/pinning/state";
import ThreeBoxContext from "../../context/three-box/context";
// import { useCurrentUser } from "../../harberger-lib/RootProvider.bs";
// import {
//   use3BoxUserData,
//   useDisplayName,
// } from "../../harberger-lib/js/user-provider/UserProvider.bs";

const ActiveMenuItem = ({ activeMenu }) => {
  switch (activeMenu) {
    case MY_PROFILE:
      return <MyProfile />;
    case REVIEW:
      return <Review />;
    case SUBMIT:
      return <Submit />;
    default:
      return <>Error, unknown active menu item {JSON.stringify(activeMenu)}</>;
  }
};

const Artist = () => {
  const [activeMenu, setActiveMenu] = useState(MY_PROFILE);
  const { profile } = useContext(ThreeBoxContext);

  return (
    <PinningState>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      <div className="artist">
        <Menu setActiveMenu={setActiveMenu} />
        <div className="artistActiveMenuItem">
          <>{profile && "Welcome, " + profile.name}</>
          <div style={{ margin: "1rem 0" }} />
          <ActiveMenuItem activeMenu={activeMenu} />
        </div>
      </div>
    </PinningState>
  );
};

export default Artist;
