import axios from "axios";
import { createMessage } from "./messages";

import { GET_MOODS, DELETE_MOOD, ADD_MOOD, GET_ERRORS } from "./types";

// GET MOODS
export const getMoods = () => (dispatch) => {
  // make fetch request to localhost:8000/api/
  axios
    .get("http://localhost:8000/api/")
    .then((res) => {
      dispatch({ type: GET_MOODS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

// DELETE MOOD
export const deleteMood = (id) => (dispatch) => {
  // make fetch request to localhost:8000/api/
  axios
    .delete(`http://localhost:8000/api/${id}`)
    .then((res) => {
      dispatch(createMessage({ deleteMood: "Mood Deleted" }));
      dispatch({ type: DELETE_MOOD, payload: id });
    })
    .catch((err) => console.log(err));
};

// ADD MOOD
export const addMood = (mood) => (dispatch) => {
  // make fetch request to localhost:8000/api/
  axios
    .post("http://localhost:8000/api/", mood)
    .then((res) => {
      dispatch(createMessage({ addMood: "Mood Added" }));
      dispatch({ type: ADD_MOOD, payload: res.data });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
