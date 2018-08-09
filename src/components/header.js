import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleLanguage } from '../actions/questions';

import { NavLink, Redirect } from 'react-router-dom';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        return <Redirect to="/" />
    }

    render() {
        let header;
        let toggleButton;
        if (!this.props.checked){
            toggleButton= <button className="toggle-btn" onClick= {e=> this.props.dispatch(toggleLanguage())}>practice spanish</button>        
        }
        else{ toggleButton= <button className="toggle-btn" onClick= {e=> this.props.dispatch(toggleLanguage())}> practicar inglés</button> }
        if (this.props.loggedIn) {
            header =
                <div className="header-bar">
                    <div className="navlinks">
                        {toggleButton}
                        <button className="logout-btn" onClick={() => this.logOut()}>✖</button>
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
    loggedIn: state.auth.currentUser !== null,
    checked:state.question.toggle
});

export default connect(mapStateToProps)(HeaderBar);