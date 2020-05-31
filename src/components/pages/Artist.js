import React, { Fragment, useState, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
// import * as Box from "3box";

import MyProfile from "../artist/MyProfile";
import Submit from "../artist/Submit";
import Menu from "../artist/Menu";
import Review from "../artist/Review";
import { MY_PROFILE, REVIEW, SUBMIT } from "../../types";
import Spinner from "../layout/Spinner";
import ThreeBoxContext from "../../context/three-box/context";
import PinningState from "../../context/pinning/state";
import ThreeBoxState from "../../context/three-box/state";

const BoxProfile = () => {
  const threeBox = useContext(ThreeBoxContext);
  const { profile, isLoading: isLoadingProfile } = threeBox;

  const getName = useCallback(() => {
    if (profile.name) {
      return profile.name;
    }
    return "Pumpkin"; // todo: generate names
  }, [profile.name]);

  if (isLoadingProfile) {
    return <Spinner />;
  }

  if (profile) {
    return <>Welcome, {getName()} 😇</>;
  }

  return (
    <Fragment>
      <h2>We could not find your 3Box account</h2>
      <p>
        It helps us identify you, think of it as a Google sign-in in the world
        of blockchain
      </p>
      <br />
      <p>
        If you would like to participate in our community, we would kindly ask
        you to register a <a href="https://3box.io/hub">3Box account</a>. Once
        done, head back here quick and get involved in the conservation of
        animals!
      </p>
    </Fragment>
  );
};

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

  return (
    <ThreeBoxState>
      <PinningState>
        <Link to="/" className="btn btn-light">
          Back
        </Link>
        <div className="artist">
          <Menu setActiveMenu={setActiveMenu} />
          <div className="artistActiveMenuItem">
            <BoxProfile />
            <div style={{ margin: "1rem 0" }} />
            <ActiveMenuItem activeMenu={activeMenu} />
          </div>
        </div>
      </PinningState>
    </ThreeBoxState>
  );
};

export default Artist;
