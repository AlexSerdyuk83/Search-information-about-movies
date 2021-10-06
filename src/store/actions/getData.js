import {FETCH_DATA} from "./types";
import axios from "axios";

export const getData = (text, pageNumber) => {
  return async dispatch => {
    const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${text}&page=${pageNumber}`);
    dispatch({type: FETCH_DATA, payload: response});
  };
};
