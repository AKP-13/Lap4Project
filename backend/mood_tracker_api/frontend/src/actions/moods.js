import axios from "axios";

import { GET_MOODS } from "./types";

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
