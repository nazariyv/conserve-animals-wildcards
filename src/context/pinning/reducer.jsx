import { POST_FOR_PINNING, UPDATE_STATE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case POST_FOR_PINNING:
      return state;
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
