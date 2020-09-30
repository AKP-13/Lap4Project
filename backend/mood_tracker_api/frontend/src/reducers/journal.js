import { GET_ENTRY, ADD_ENTRY, DELETE_ENTRY } from "../actions/types.js";

const initialState = {
    entries: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ENTRY:
            return { ...state, entries: action.payload };
        case DELETE_ENTRY:
            return {
                ...state,
                entries: state.entries.filter(
                    (entry) => entry.id !== action.payload
                ),
            };
        case ADD_ENTRY:
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };
        default:
            return state;
    }
}
