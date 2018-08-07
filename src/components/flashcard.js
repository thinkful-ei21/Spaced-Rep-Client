import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { fetchStats, updateStats } from '../actions/stats';
import Input from './input';
import { required, nonEmpty } from '../validators';


class FlashCard extends React.Component {

    checkQuestion(answer) {

        if (this.props.spanish === answer.toLowerCase()) {

            // Answer is correct - Check
            // Display message to user that answer is correct 
            // Alter attempt score
            // Call sorting function to decide order of next question
            // Display next question
            console.log('Answer correct');
            ReactDOM.render(<h1>Correct</h1>, document.getElementById('root'));
            setTimeout(function () {
                <Redirect to='/flashcard' />
            },2000)                        
        } else {
            // Answer is incorrect. - Check
            // Run spellcheck to see if near miss
            // Else run sorting function
            // Alter attempt score
            // Display next question
            console.log('Answer incorrect')
            // render() {
            //     return <h2>Incorrect</h2>
            // }
        }
    }


    onSubmit(value) {


        this.checkQuestion(value.guess);
        // if (value.toLowerCase() === this.props.englishword) {
        //     return this.props
        //         .dispatch(updateStats(value, this.props.id))
        //         .then(() => {
        //             this.props.dispatch(fetchStats())
        //         });
        // }
        // else { return false }
    }

    render() {
        // Engine call
        return (
            <form
                className="flashcard-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>What does '{this.props.english}' translate to?</h2>
                <label htmlFor="guess"></label>
                <Field component={Input} type="text" name="guess" validate={[required, nonEmpty]} />
                <button
                    className='save-button'
                    type="submit"
                    disabled={this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

FlashCard = reduxForm({
    form: 'guess',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('guess', Object.keys(errors)[0]))
})(FlashCard);

export default (connect()(FlashCard));