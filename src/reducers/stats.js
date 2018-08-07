import {
    FETCH_STATS_SUCCESS,
    FETCH_STATS_ERROR,
} from '../actions/stats';

const initialState = {
    all: [
        {
            id: 0,
            difficulty: 'beginner',
            score: [2, 0, 1, 0, 1],
            percentage: 33
        },
        {
            id: 2,
            difficulty: 'intermediate',
            score: [0, 0, 0, 0, 0],
            percentage: 0
        },
        {
            id: 3,
            difficulty: 'advanced',
            score: [0, 0, 0, 0, 0],
            percentage: 0
        }
    ],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_STATS_SUCCESS) {
        return Object.assign({}, state, {
            all: action.data,
            error: null
        });
    } else if (action.type === FETCH_STATS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
