import {UPDATE_PAGINATE} from "./types";

export const updatePage = (pageNumber) => {
  return {
    type: UPDATE_PAGINATE,
    payload: pageNumber,
  };
};
