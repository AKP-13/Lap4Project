import { GET_JOURNAL, ADD_JOURNAL, DELETE_JOURNAL } from "../actions/types.js";

const initialState = {
    journals: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JOURNAL:
            return { ...state, journals: action.payload };
        case DELETE_JOURNAL:
            return {
                ...state,
                journals: state.journals.filter(
                    (journal) => journal.id !== action.payload
                ),
            };
        case ADD_JOURNAL:
            return {
                ...state,
                journals: [...state.journals, action.payload],
            };
        default:
            return state;
    }
}
