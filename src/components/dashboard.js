import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './require-login';
import Section from './section-card';
import { fetchQuestions } from '../actions/questions';


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    showCard(difficulty) {
        this.props.history.push(`/flashcard/${difficulty}`)
    };

    render() {
        let sections = this.props.user.map(item => <Section showCard={difficulty => this.showCard(difficulty)} key={item.id}{...item} />)
        return (
            <div className="dashboard">
                {sections}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        user: state.stats.all,
        questions: state.questions.all
    };
};


export default requiresLogin()(connect(mapStateToProps)(Dashboard));