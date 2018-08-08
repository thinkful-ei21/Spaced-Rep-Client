// import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';
// import { SubmissionError } from 'redux-form';


// export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
// export const fetchStatsSuccess = (data) => ({
//     type: FETCH_STATS_SUCCESS,
//     data
// });

// export const FETCH_STATS_ERROR = 'FETCH_STATS_ERROR';
// export const fetchStatsError = error => ({
//     type: FETCH_STATS_ERROR,
//     error
// });


// export const fetchStats = () => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/stats`, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${authToken}`
//         }
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then((data) => dispatch(fetchStatsSuccess(data)))
//         .catch(err => {
//             dispatch(fetchStatsError(err));
//         });
// };


// export const updateStats = (stats, id) => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/stats/${id}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             Authorization: `Bearer ${authToken}`
//         },
//         body: JSON.stringify(stats)
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .catch(err => {
//             const { reason, message, location } = err;
//             if (reason === 'ValidationError') {
//                 console.log('create stats error')
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });
// };