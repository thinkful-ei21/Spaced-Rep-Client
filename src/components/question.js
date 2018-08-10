import React from 'react';
import { connect } from 'react-redux';
import {submitUserAnswer} from '../actions/questions';

class Question extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let userInput = e.target.userAnswer.value.toLowerCase();
    e.target.userAnswer.value = '';
    this.props.dispatch(submitUserAnswer(userInput));

  }
  render() {
    let questionWord;
    let buttonText;
    let response;
    if(this.props.toggle){ questionWord=
      this.props.currentQuestion !== null
        ? `What does '${this.props.currentQuestion.spanish}' mean?`
        : undefined;
        buttonText= 'submit';
      }
    if(!this.props.toggle){ questionWord=      
      this.props.currentQuestion !== null
      ? `¿Qué significa '${this.props.currentQuestion.english}'?`
      : undefined;
      buttonText='enviar';
    }
    const feedback =
      this.props.feedback !== null ? this.props.feedback : undefined;

    const correctAnswer =
      this.props.correctAnswer !== null ? this.props.correctAnswer : undefined;

    if(feedback==='✘'){
      response=<div className='feedback-card-x'>
      <h3 className="feedback symbol-x">{feedback}</h3>
      <h3 className="feedback">{correctAnswer}</h3>
    </div>
    } 
    if(feedback==='✔'){
      response=<div className='feedback-card-check'>
      <h3 className="feedback symbol-check">{feedback}</h3>
      <h3 className="feedback">{correctAnswer}</h3>
    </div>
    } 

    return (
      <div className="question-card">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>{questionWord}</h2>
          <input
            className="useranswer"
            type="text"
            name="userAnswer"
            autoComplete="off"
          />
          <button className="submit-btn">{buttonText}</button>
        </form>
          {response}
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