import React from 'react';
import { connect } from 'react-redux';
import {
  submitUserAnswerCorrect,
  submitUserAnswerWrong,
} from '../actions/questions';

class Question extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let answer; 
    if(this.props.toggle) {answer=this.props.currentQuestion.english.toLowerCase();}
    else{answer=this.props.currentQuestion.spanish.toLowerCase();}
    let userInput = e.target.userAnswer.value.toLowerCase();
    e.target.userAnswer.value = '';

    if (answer === userInput) {
      this.props.dispatch(submitUserAnswerCorrect());
    } else {
      this.props.dispatch(submitUserAnswerWrong());
    }
  }
  render() {
    let questionWord;
    let buttonText;
    if(this.props.toggle){ questionWord=
      this.props.currentQuestion !== null
        ? `what does '${this.props.currentQuestion.spanish}' mean?`
        : undefined;
        buttonText= 'Submit';
      }
    else{ questionWord=      
      this.props.currentQuestion !== null
      ? `¿Qué significa '${this.props.currentQuestion.english}'?`
      : undefined;
      buttonText='enviar';
    }
    const feedback =
      this.props.feedback !== null ? this.props.feedback : undefined;

    const correctAnswer =
      this.props.correctAnswer !== null ? this.props.correctAnswer : undefined;

    return (
      <div className="question-dashboard">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>{questionWord}</h2>
          <input
            className="useranswer"
            type="text"
            name="userAnswer"
            autoComplete="off"
          />
          <button className="btn-dash">{buttonText}</button>
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
  toggle:state.question.toggle
});

export default connect(mapStateToProps)(Question);