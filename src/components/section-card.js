import React from 'react';
import { connect } from 'react-redux';


class Section extends React.Component {

    render() {
        return (
            <div className="section-card">
                <h2>{this.props.difficulty}</h2>
                <h3>{this.props.percentage}%</h3>
                <button onClick={e => this.props.showCard(this.props.id)}>Start</button>
            </div >
        )
    }
}

export default (connect()(Section));