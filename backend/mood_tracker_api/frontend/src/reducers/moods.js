import { GET_MOODS, DELETE_MOOD, ADD_MOOD } from "../actions/types.js";

const initialState = {
    moods: [],
};
// moods is what we are fetching from the backend and pass into here

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOODS:
            return { ...state, moods: action.payload };
        case DELETE_MOOD:
            return {
                ...state,
                moods: state.moods.filter((mood) => mood.id !== action.payload),
            };
        case ADD_MOOD:
            return {
                ...state,
                moods: [...state.moods, action.payload],
            };
        default:
            return state;
    }
}
