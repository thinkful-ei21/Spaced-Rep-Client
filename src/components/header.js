import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import { NavLink, Redirect } from 'react-router-dom';

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
                    <div className="navlinks">
                        <button className="logout-button" onClick={() => this.logOut()}>Log Out<i className="fas fa-sign-out-alt"></i></button>
                        <NavLink role="navigation" activeClassName="activelink" className='link' to="/dashboard" ><i className="fas fa-book"></i></NavLink>
                    </div>
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
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);