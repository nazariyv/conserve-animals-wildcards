import React, { useReducer, useCallback } from "react";
import PinningContext from "./context";
import PinningReducer from "./reducer";
import { UPDATE_STATE } from "../types";
import { pinToIPFS } from "../../internal/pinata";

// todo: validation
// forbid submitting, unless all the conditions are satisfied

const PinningState = ({ children }) => {
  const initialState = {
    artName: "",
    authorComment: "",
    image: null,
    isPinning: false,
    isPinned: null,
    pinMeta: null,
  };

  const [state, dispatch] = useReducer(PinningReducer, initialState);

  const onImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
    }
    dispatch({ type: UPDATE_STATE, payload: { image: e.target.files[0] } });
  }, []);

  const onChange = useCallback((e) => {
    if (e) {
      e.preventDefault();
    }
    dispatch({
      type: UPDATE_STATE,
      payload: { [e.target.name]: e.target.value },
    });
  }, []);

  const pinArt = useCallback(
    async (e) => {
      if (e) {
        e.preventDefault();
      }
      dispatch({
        type: UPDATE_STATE,
        payload: { isPinning: true, isPinned: null, pinMeta: null },
      });
      const resp = await pinToIPFS({ file: state.image });
      dispatch({
        type: UPDATE_STATE,
        payload: { isPinning: false, pinMeta: resp },
      });
      console.log(resp);
      if (resp.status !== 200) {
        console.log("setting is pinned to false");
        dispatch({ type: UPDATE_STATE, payload: { isPinned: false } });
      }
    },
    [state.image]
  );

  return (
    <PinningContext.Provider
      value={{
        ...state,
        onImage,
        onChange,
        pinArt,
      }}
    >
      {children}
    </PinningContext.Provider>
  );
};

export default PinningState;
