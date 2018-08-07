import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './require-login';
import FlashCard from './flashcard';
import { Link } from 'react-router-dom';


export class FlashCardPage extends React.Component {


    render() {
        return (
            <div className="dashboard">
                <FlashCard {...this.props.questions} />
                <Link className='register-link' to="/dashboard">Home</Link>
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {

    return {
        selectedDifficulty: state.stats.all.find(item => item.difficulty === props.match.params.difficulty),
        questions: state.questions.all.find(item => item.difficulty === props.match.params.difficulty)
    };
};

export default requiresLogin()(connect(mapStateToProps)(FlashCardPage));