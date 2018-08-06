import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './require-login';
import Section from './section-card';


export class Dashboard extends React.Component {
    showCard(id) {
        this.props.history.push(`/flashcard/${id}`)
    };

    render() {
        let sections = this.props.user.map(item => <Section showCard={id => this.showCard(id)} key={item.id}{...item} />)
        return (
            <div className="dashboard">
                {sections}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        user: state.stats.all
    };
};


export default requiresLogin()(connect(mapStateToProps)(Dashboard));