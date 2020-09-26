import { GET_MOODS } from "./types";

// GET MOODS
export const getMoods = () => (dipatch) => {
  // make fetch request to localhost:8000/api/
  fetch("http://localhost:8000/api/")
    .then((res) => {
      dispatchEvent({ type: GET_MOODS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
