import React from 'react';
import { connect } from 'react-redux';

class Score extends React.Component {
  render() {
    if (this.props.total === 0) {
      return null;
    }
    return (
      <div className="progressbar">
        <h3>
          {this.props.correct} / {this.props.total}
        </h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  correct: state.question.sessionScore,
  total: state.question.totalSessionQuestions,
});
export default connect(mapStateToProps)(Score);