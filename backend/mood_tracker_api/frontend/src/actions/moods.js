import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_MOODS, DELETE_MOOD, ADD_MOOD } from "./types";

// GET MOODS
export const getMoods = () => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .get("http://localhost:8000/api/moods/", tokenConfig(getState))
        .then((res) => {
            dispatch({ type: GET_MOODS, payload: res.data });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE MOOD
export const deleteMood = (id) => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .delete(`http://localhost:8000/api/moods/${id}/`, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ deleteMood: "Mood Deleted" }));
            dispatch({ type: DELETE_MOOD, payload: id });
        })
        .catch((err) => console.log(err));
};

// ADD MOOD
export const addMood = (mood) => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .post("http://localhost:8000/api/moods/", mood, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ addMood: "Mood Added" }));
            dispatch({ type: ADD_MOOD, payload: res.data });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
