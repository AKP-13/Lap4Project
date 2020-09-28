import { combineReducers } from "redux";
import moods from "./moods";
import errors from "./errors";

export default combineReducers({ moods, errors });
