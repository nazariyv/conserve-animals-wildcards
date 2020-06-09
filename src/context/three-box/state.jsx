import React, { useReducer, useCallback, useEffect } from "react";
import ThreeBoxContext from "./context";
import ThreeBoxReducer from "./reducer";
import Box from "3box";
import { WILDCARDS } from "../../types";

import {
  make as Web3Connect,
  Modal_make as Web3ConnectModal,
} from "../../harberger-lib/components/Web3Connect.gen";
import {
  useCurrentUser,
  useIsProviderSelected,
} from "../../harberger-lib/RootProvider.bs";
import { use3BoxUserData } from "../../harberger-lib/js/user-provider/UserProvider.bs";
import { UPDATE_STATE } from "../types";

const ThreeBoxState = ({ children }) => {
  const isProviderSelected = useIsProviderSelected();
  const currentUser = useCurrentUser();
  let profile = use3BoxUserData(currentUser || "not-found");
  if (profile) {
    profile = profile.profile;
  }

  const initialState = {
    profile,
    isProviderSelected,
    currentUser,
    box: null,
    space: null,
  };

  const [state, dispatch] = useReducer(ThreeBoxReducer, initialState);

  const openBoxAndSpace = useCallback(async () => {
    // if (isProviderSelected) {
    // const provider = await Box.get3idConnectProvider();
    console.log("currentUser is ");
    console.log(currentUser);
    const box = await Box.openBox(String(currentUser), window.ethereum); // * cannot get 3id provider to work
    await box.syncDone;
    const space = await box.openSpace(WILDCARDS);
    await space.syncDone;
    return { box, space };
    // } else {
    //   console.log("try again when the provider is selected");
    //   return { box: null, space: null };
    // }
    // }, [isProviderSelected, currentUser]);
  }, [currentUser, window.ethereum]);

  useEffect(() => {
    openBoxAndSpace().then(({ box, space }) => {
      if (!box && !space) {
        return;
      }
      dispatch({ type: UPDATE_STATE, payload: { box, space } });
    });
  }, [isProviderSelected, openBoxAndSpace, window.ethereum]);

  useEffect(() => {
    dispatch({
      type: UPDATE_STATE,
      payload: { isProviderSelected, profile, currentUser },
    });
  }, [isProviderSelected, profile, currentUser]);

  if (!isProviderSelected) {
    return (
      <>
        Connect to 3Box
        <Web3Connect />
        <Web3ConnectModal />
      </>
    );
  }

  return (
    <ThreeBoxContext.Provider
      value={{
        profile: state.profile,
        isProviderSelected: state.isProviderSelected,
        currentUser: state.currentUser,
        box: state.box,
        space: state.space,
        openBoxAndSpace,
      }}
    >
      {children}
    </ThreeBoxContext.Provider>
  );
};

export default ThreeBoxState;
