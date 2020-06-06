import {
  POST_FOR_PINNING,
  UPDATE_STATE,
  UPDATE_SELECTED_ANIMAL,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case POST_FOR_PINNING:
      return state;
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_SELECTED_ANIMAL:
      return {
        ...state,
        animal: action.payload,
      };
    default:
      return state;
  }
};
