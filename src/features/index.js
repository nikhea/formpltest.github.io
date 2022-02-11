import { combineReducers } from "redux";

import templestsReducer from "./templest/templestSlice";
const rootReducer = combineReducers({
  templestsReducer,
});

export default rootReducer;
