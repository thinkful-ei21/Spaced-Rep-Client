import {
    FETCH_QUESTION_ERROR,
    FETCH_QUESTION_SUCCESS,
    SUBMIT_USER_ANSWER_CORRECT,
    SUBMIT_USER_ANSWER_WRONG,
    DISMISS_FEEDBACK,
    FETCH_FEEDBACK_CORRECT,
    FETCH_FEEDBACK_INCORRECT,
    TOGGLE_LANGUAGE
  } from '../actions/questions';
  
  const initialState = {
    game: null,
    error: null,
    loading: null,
    correct: false,
    wrong: false,
    feedback: null,
    correctAnswer: null,
    sessionScore: 0,
    totalSessionQuestions: 0,
    toggle:true
  };
  
  export default function questionReducer(state = initialState, action) {
    if (action.type === FETCH_QUESTION_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null,
        game: action.payload,
      });
    }
    if (action.type === FETCH_QUESTION_ERROR) {
      return Object.assign({}, state, {
        game: null,
        loading: false,
        error: action.err,
      });
    }
    if (action.type === SUBMIT_USER_ANSWER_CORRECT) {
      return Object.assign({}, state, {
        correct: true,
        wrong: false,
        sessionScore: state.sessionScore + 1,
        totalSessionQuestions: state.totalSessionQuestions + 1,
      });
    }
    if (action.type === SUBMIT_USER_ANSWER_WRONG) {
      return Object.assign({}, state, {
        correct: false,
        wrong: true,
        totalSessionQuestions: state.totalSessionQuestions + 1,
      });
    }
    if (action.type === DISMISS_FEEDBACK) {
      return Object.assign({}, state, {
        correct: false,
        wrong: false,
        feedback: action.payload,
      });
    }
    if (action.type === FETCH_FEEDBACK_CORRECT) {
      return Object.assign({}, state, {
        feedback: action.payload,
        correctAnswer: `${state.game.spanish} = ${
          state.game.english
        }`,
      });
    }
    if (action.type === FETCH_FEEDBACK_INCORRECT) {
      return Object.assign({}, state, {
        feedback: `${action.payload}`,
        correctAnswer: `${state.game.spanish} = ${
          state.game.english
        }`,
      });
    } 
    if (action.type === TOGGLE_LANGUAGE) {
      return Object.assign({}, state, {
          toggle: !state.toggle,
      });
    }else {
      return state;
    }
  }