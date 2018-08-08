import React from 'react';
import { connect } from 'react-redux';
import {
  submitUserAnswerCorrect,
  submitUserAnswerWrong,
} from '../actions/questions';

class Question extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let answer = this.props.currentQuestion.english.toLowerCase();
    let userInput = e.target.userAnswer.value.toLowerCase();
    e.target.userAnswer.value = '';

    if (answer === userInput) {
      this.props.dispatch(submitUserAnswerCorrect());
    } else {
      this.props.dispatch(submitUserAnswerWrong());
    }
  }
  render() {
    const spanishWord =
      this.props.currentQuestion !== null
        ? this.props.currentQuestion.spanish
        : undefined;
    const feedback =
      this.props.feedback !== null ? this.props.feedback : undefined;

    const correctAnswer =
      this.props.correctAnswer !== null ? this.props.correctAnswer : undefined;

    return (
      <div className="question-dashboard">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>What does '{spanishWord}' mean?</h2>
          <input
            className="useranswer"
            type="text"
            name="userAnswer"
            autoComplete="off"
          />
          <button className="btn-dash">Submit</button>
        </form>
        <h3 className="feedback">{feedback}</h3>
        <h3 className="feedback">{correctAnswer}</h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentQuestion: state.question.game,
  wrong: state.question.wrong,
  correct: state.question.correct,
  feedback: state.question.feedback,
  correctAnswer: state.question.correctAnswer,
});

export default connect(mapStateToProps)(Question);