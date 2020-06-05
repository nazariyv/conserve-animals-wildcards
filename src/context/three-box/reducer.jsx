import { SET_PROFILE, SET_IS_LOADING_PROFILE, UPDATE_STATE } from "../types";

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
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
