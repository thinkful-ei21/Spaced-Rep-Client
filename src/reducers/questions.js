import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR
} from '../actions/questions';

const initialState = {
    all: [
        {
            difficulty: '',
            spanish: '',
            english: ''
        }
    ],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            all: action.data,
            error: null
        });
    } else if (action.type === FETCH_QUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}