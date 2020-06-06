import React, { useReducer, useCallback, useEffect, useContext } from "react";
import PinningContext from "./context";
import PinningReducer from "./reducer";
import { UPDATE_STATE, UPDATE_SELECTED_ANIMAL } from "../types";
import { pinToIPFS } from "../../internal/pinata";
import ProjectContext from "../projects/projectContext";

// todo: validation
// forbid submitting, unless all the conditions are satisfied

const PinningState = ({ children }) => {
  // ! PinningState needs to be wrapped in ProjectState
  const { episodes } = useContext(ProjectContext);

  const initialState = {
    artName: "",
    authorComment: "",
    image: null,
    isPinning: false,
    isPinned: null,
    pinMeta: null,
    animal: { value: "", label: "" },
    animalOptions: [],
  };

  const [state, dispatch] = useReducer(PinningReducer, initialState);

  useEffect(() => {
    const animalOptions = episodes.map((v) => ({
      value: v.role + v.name,
      label: v.name,
    }));
    dispatch({ type: UPDATE_STATE, payload: { animalOptions } });
  }, [episodes]);

  useEffect(() => {
    if (state.isPinned) {
      dispatch({
        type: UPDATE_STATE,
        payload: { artName: "", image: null, authorComment: "", animal: "" },
      });
    }
  }, [state.isPinned]);

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

  const onSelectChange = useCallback((selectedOption) => {
    console.log(selectedOption);
    dispatch({
      type: UPDATE_SELECTED_ANIMAL,
      payload: { ...selectedOption },
    });
  }, []);

  const pinArt = useCallback(
    async ({ e, profile, artMeta }) => {
      if (e) {
        e.preventDefault();
      }
      if (!profile) {
        return;
      }
      dispatch({
        type: UPDATE_STATE,
        payload: { isPinning: true, isPinned: null, pinMeta: null },
      });
      const resp = await pinToIPFS({ file: state.image, profile, artMeta });
      dispatch({
        type: UPDATE_STATE,
        payload: {
          isPinning: false,
          pinMeta: resp,
          isPinned: resp ? resp.status === 200 : false,
        },
      });
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
        onSelectChange,
      }}
    >
      {children}
    </PinningContext.Provider>
  );
};

export default PinningState;
