import React from 'react';
import { connect } from 'react-redux';
import requireLogin from './require-login';
import { fetchQuestion } from '../actions/questions';
import Question from './question';

export class Dashboard extends React.Component {
    componentDidMount() {
      console.log('dashboard mounted');
        this.props.dispatch(fetchQuestion());
      }

      render() {
        return (
          <div className="dashboard">
            <Question />
          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
      const { currentUser } = state.auth;
      return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`,
        currentQuestion: state.question,
      };
    };


export default requireLogin()(connect(mapStateToProps)(Dashboard));