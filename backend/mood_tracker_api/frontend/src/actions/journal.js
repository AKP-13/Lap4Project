import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_JOURNAL, DELETE_JOURNAL, ADD_JOURNAL } from "./types";

// GET MOODS CHANGE TO ENTRY
export const getJournal = () => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .get("http://localhost:8000/api/journals/", tokenConfig(getState))
        .then((res) => {
            dispatch({ type: GET_JOURNAL, payload: res.data });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE MOOD CHANGE TO ENTRY
export const deleteJournal = (id) => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .delete(
            `http://localhost:8000/api/journals/${id}/`,
            tokenConfig(getState)
        )
        .then((res) => {
            dispatch(createMessage({ deleteJournal: "Journal entry deleted" }));
            dispatch({ type: DELETE_JOURNAL, payload: id });
        })
        .catch((err) => console.log(err));
};

// ADD ENTRY
export const addJournal = (entry) => (dispatch, getState) => {
    // make fetch request to localhost:8000/api/
    axios
        .post(
            "http://localhost:8000/api/journals/",
            entry,
            tokenConfig(getState)
        )
        .then((res) => {
            dispatch(createMessage({ addEntry: "Journal entry added" }));
            dispatch({ type: ADD_JOURNAL, payload: res.data });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
