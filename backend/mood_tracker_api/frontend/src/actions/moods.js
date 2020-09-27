import axios from "axios";

import { GET_MOODS, DELETE_MOOD } from "./types";

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
    .get(`http://localhost:8000/api/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_MOOD, payload: id });
    })
    .catch((err) => console.log(err));
};
