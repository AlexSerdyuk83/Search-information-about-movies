import {combineReducers} from "redux";
import searchReducer from "./searchReducer";
import responseDataReducer from "./responseDataReducer";

const rootReducer = combineReducers({
   searchBox: searchReducer,
   data: responseDataReducer,
});

export default rootReducer;
