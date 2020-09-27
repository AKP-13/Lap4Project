import { GET_MOODS } from "./types";

// GET MOODS
export const getMoods = () => {
  // make fetch request to localhost:8000/api/
  return (dispatch) => {
    fetch("http://localhost:8000/api/")
      .then((resp) => console.log(resp.json()))
      .then((moods) => dispatch({ type: "GET_MOODS", payload: moods }));
  };
};
