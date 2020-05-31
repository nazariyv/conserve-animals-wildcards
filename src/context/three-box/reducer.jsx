import { SET_PROFILE, SET_IS_LOADING_PROFILE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_IS_LOADING_PROFILE:
      return {
        ...state,
        isLoadingProfile: action.payload,
      };
    default:
      return state;
  }
};
