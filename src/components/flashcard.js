import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { fetchStats, updateStats } from '../actions/stats';
import Input from './input';
import { required, nonEmpty } from '../validators';



export class FlashCard extends React.Component {
    componentWillMount() {
        this.props.initialize({});
    }
    onSubmit(value) {
        if (value.toLowerCase() === this.props.englishword) {
            return this.props
                .dispatch(updateStats(value, this.props.id))
                .then(() => {
                    this.props.dispatch(fetchStats())
                });
        }
        else { return false }
    }

    render() {
        return (
            <form
                className="flashcard-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>What does {this.props.spanishword}/// SPANISH WORD GOES HERE ///  translate to?</h2>
                <label htmlFor="guess"></label>
                <Field component={Input} type="text" name="guess" validate={[required, nonEmpty]}/>
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

export default reduxForm({
    form: 'edit',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit', Object.keys(errors)[0]))
})(FlashCard);