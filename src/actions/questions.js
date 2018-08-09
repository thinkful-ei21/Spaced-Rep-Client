import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';



export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
const fetchQuestionError = err => ({
  type: FETCH_QUESTION_ERROR,
  err,
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  payload: question,
});

export const SUBMIT_USER_ANSWER_CORRECT = 'SUBMIT_USER_ANSWER_CORRECT';
const feedbackRight = () => ({
  type: SUBMIT_USER_ANSWER_CORRECT,
});
export const SUBMIT_USER_ANSWER_WRONG = 'SUBMIT_USER_ANSWER_WRONG';
const feedbackWrong = () => ({
  type: SUBMIT_USER_ANSWER_WRONG,
});

export const DISMISS_FEEDBACK = 'DISMISS_FEEDBACK';
export const dismissFeedback = () => ({
  type: DISMISS_FEEDBACK,
  payload: '',
});

export const FETCH_FEEDBACK_CORRECT = 'FETCH_FEEDBACK_CORRECT';
export const fetchFeedBackCorrect = () => ({
  type: FETCH_FEEDBACK_CORRECT,
  payload: '✔',
});

export const FETCH_FEEDBACK_INCORRECT = 'FETCH_FEEDBACK_INCORRECT';
export const fetchFeedBackIncorrect = () => ({
  type: FETCH_FEEDBACK_INCORRECT,
  payload: '✘',
});

export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';
export const toggleLanguage = () => ({
    type: TOGGLE_LANGUAGE
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log('fetch question action fired')
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  .then(res => res.json())
  .then((data) => dispatch(fetchQuestionSuccess(data)))
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
};

// export const submitUserAnswerCorrect = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   dispatch(feedbackRight());
//   fetch(`${API_BASE_URL}/questions/correct`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   })
//     .then(() => dispatch(fetchFeedBackCorrect()))
//     .then(() => dispatch(fetchQuestion()))
//     .catch(err => {});
// };

// export const submitUserAnswerWrong = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   dispatch(feedbackWrong());
//   fetch(`${API_BASE_URL}/questions/wrong`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   })
//     .then(() => dispatch(fetchFeedBackIncorrect()))
//     .then(() => dispatch(fetchQuestion()))
//     .catch(err => dispatch(fetchQuestionError(err)));
// }; 

export const submitUserAnswer = answer => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/questions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
        },
    body: JSON.stringify(answer)
  })
    .then(res => normalizeResponseErrors(res))
    .then((data) =>{
     if(data=== true){
       console.log('dispatch correct feedback');
       dispatch(fetchFeedBackCorrect())
       dispatch(feedbackWrong())
      }
     else{
      console.log('dispatch wrong feedback');
      dispatch(fetchFeedBackIncorrect())
      dispatch(feedbackRight())
      }
    })
    .then(() => dispatch(fetchQuestion()))
    .catch(err => {});
};