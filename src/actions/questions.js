import { API_BASE_URL } from '../config';




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
 
export const submitUserAnswer = answer => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/questions`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`
        },
    body: answer
  })
    .then((res)=>res.json())
    .then((data) =>{
     if(data === true){
       dispatch(fetchFeedBackCorrect());
       dispatch(feedbackRight())
      }
     else{
      dispatch(fetchFeedBackIncorrect());
      dispatch(feedbackWrong())
      }
    })
    .then(() => dispatch(fetchQuestion()))
    .catch(err => {});
};