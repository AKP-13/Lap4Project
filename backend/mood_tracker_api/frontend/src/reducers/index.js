import { combineReducers } from "redux";
import moods from "./moods";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({ moods, errors, messages });
