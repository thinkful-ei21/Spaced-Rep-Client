import React from 'react';
import { connect } from 'react-redux';
import requireLogin from './require-login';
import { fetchQuestion, toggleLanguage } from '../actions/questions';
import Question from './question';
import Score from './score';

export class Dashboard extends React.Component {
    componentDidMount() {
      console.log('dashboard mounted');
        this.props.dispatch(fetchQuestion());
      }

      render() {
        let toggleButton;
        if (!this.props.checked){
            toggleButton= <button className="check-button" onClick= {e=> this.props.dispatch(toggleLanguage())}>practice spanish</button>        
        }
        else{ toggleButton= <button className="check-button" onClick= {e=> this.props.dispatch(toggleLanguage())}> practicar inglés</button> }
        return (
          <div className="dashboard">
            {toggleButton}
            <Question />
            <Score />
          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {
        checked:state.question.toggle
      };
    };


export default requireLogin()(connect(mapStateToProps)(Dashboard));