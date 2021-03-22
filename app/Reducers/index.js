import { combineReducers } from "redux";
import { loadingReducer } from "./loading";

const createRootReducer = () =>
  combineReducers({
    loadingReducer,
  });

export default createRootReducer;
