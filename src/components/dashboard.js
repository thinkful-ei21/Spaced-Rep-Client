import React from 'react';
import { connect } from 'react-redux';
import requireLogin from './require-login';
import { fetchQuestion} from '../actions/questions';
import Question from './question';
import Score from './score';
import { toggleLanguage } from '../actions/questions';


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
      }

      render() {
        let toggleButton;
        if (!this.props.checked){
            toggleButton= <button className="toggle-btn" onClick= {e=> this.props.dispatch(toggleLanguage())}>practice spanish</button>        
        }
        else{ toggleButton= <button className="toggle-btn" onClick= {e=> this.props.dispatch(toggleLanguage())}> practicar inglés</button> }
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