import {UPDATE_TEXT} from "./types";

export const updateSearchText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: text,
  };
};
