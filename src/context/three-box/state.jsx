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
  };

  const [state, dispatch] = useReducer(ThreeBoxReducer, initialState);

  useEffect(() => {
    dispatch({
      type: UPDATE_STATE,
      payload: { isProviderSelected, profile, currentUser },
    });
  }, [isProviderSelected, profile, currentUser]);

  const openBoxAndSpace = useCallback(async () => {
    const provider = await Box.get3idConnectProvider();
    const box = await Box.openBox(process.env.REACT_APP_ADMIN, provider); // * web3 if it doesn't work?
    await box.syncDone;
    const space = await box.openSpace(WILDCARDS);
    await space.syncDone;
    return { box, space };
  }, []);

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
        openBoxAndSpace,
      }}
    >
      {children}
    </ThreeBoxContext.Provider>
  );
};

export default ThreeBoxState;
