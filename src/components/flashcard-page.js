import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './require-login';
import FlashCard from './flashcard';

export class FlashCardPage extends React.Component {


    render() {
        return (
            <div className="dashboard">
                <FlashCard  {...this.props.selectedDifficulty} />
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {

    return {
        selectedDifficulty: state.stats.all.find(item => item.id === props.match.params.id)

    };
};

export default requiresLogin()(connect(mapStateToProps)(FlashCardPage));