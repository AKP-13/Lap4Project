import { combineReducers } from "redux";
import moods from "./moods";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import journal from "./journal";

export default combineReducers({ moods, errors, messages, journal, auth });
