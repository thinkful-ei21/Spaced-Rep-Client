import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import {Redirect } from 'react-router-dom';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        return <Redirect to="/" />
    }

    render() {
        let header;

        if (this.props.loggedIn) {
            header =
                <div className="header-bar">
                    <button className="logout-btn" onClick={() => this.logOut()}>✖</button>
                </div>
        }
        return (
            <div>
                {header}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,

});

export default connect(mapStateToProps)(HeaderBar);