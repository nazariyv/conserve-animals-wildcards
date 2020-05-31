import React, { useReducer, useEffect, useCallback } from "react";
import ThreeBoxContext from "./context";
import ThreeBoxReducer from "./reducer";
import { SET_PROFILE, SET_IS_LOADING_PROFILE } from "../types";

import { getProfile as get3BoxProfile } from "3box/lib/api";

const ThreeBoxState = ({ children }) => {
  const initialState = { profile: {}, isLoading: true };

  const [state, dispatch] = useReducer(ThreeBoxReducer, initialState);

  const setProfile = useCallback(({ profile }) => {
    dispatch({ type: SET_PROFILE, payload: profile });
  }, []);

  const setLoadingBoxUser = useCallback(({ isLoading }) => {
    dispatch({ type: SET_IS_LOADING_PROFILE, payload: isLoading });
  }, []);

  const fetch3BoxUser = useCallback(async () => {
    const profile = await get3BoxProfile(
      "0xd93800B7290B37a3ac36e4cDd3F881a929acD4A3"
    );
    if (profile) {
      setProfile({ profile });
      setLoadingBoxUser({ isLoading: false });
    }
  }, [setProfile, setLoadingBoxUser]);

  useEffect(() => {
    fetch3BoxUser();
    // eslint-disable-next-line
  }, []);

  return (
    <ThreeBoxContext.Provider
      value={{ profile: state.profile, isLoadingUser: state.isLoadingUser }}
    >
      {children}
    </ThreeBoxContext.Provider>
  );
};

export default ThreeBoxState;
