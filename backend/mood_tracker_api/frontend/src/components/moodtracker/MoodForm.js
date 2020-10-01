import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMood } from "../../actions/moods";
import "./MoodForm.css";

class MoodForm extends Component {
    state = {
        date: "",
        moodlevel: "",
        // user: "",
        dietQuality: "",
        exerciseQuality: "",
        sleepQuality: "",
        sleepHours: "",
        notes: "",
    };

    static propTypes = {
        addMood: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const {
            date,
            moodlevel,
            // user,
            dietQuality,
            exerciseQuality,
            sleepQuality,
            sleepHours,
            notes,
        } = this.state;
        const mood = {
            date,
            moodlevel,
            // user,
            dietQuality,
            exerciseQuality,
            sleepQuality,
            sleepHours,
            notes,
        };
        this.props.addMood(mood);
        this.setState({
            date: "",
            moodlevel: "",
            dietQuality: "",
            exerciseQuality: "",
            sleepQuality: "",
            sleepHours: "",
            notes: "",
        });
        this.props.closeModal();
    };

    render() {
        const {
            date,
            moodlevel,
            dietQuality,
            exerciseQuality,
            sleepQuality,
            sleepHours,
            notes,
        } = this.state;
        return (
            <Fragment>
                <h2>Add new mood data</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="date"
                            onChange={this.onChange}
                            value={date}
                            required
                        />
                    </div>
                    {/* Add Mood Level */}
                    <div className="form-group">
                        <label>Mood-level</label>
                        <input
                            max="5"
                            min="1"
                            className="form-control"
                            type="number"
                            name="moodlevel"
                            onChange={this.onChange}
                            value={moodlevel}
                            required
                        />
                    </div>
                    {/* Add Exercise Level */}
                    <div className="form-group">
                        <label>Exercise-level</label>
                        <input
                            max="3"
                            min="1"
                            className="form-control"
                            type="number"
                            name="exerciseQuality"
                            onChange={this.onChange}
                            value={exerciseQuality}
                            required
                        />
                    </div>
                    {/* Add Sleep Quality Level */}
                    <div className="form-group">
                        <label>Sleep Quality</label>
                        <input
                            max="3"
                            min="1"
                            className="form-control"
                            type="number"
                            name="sleepQuality"
                            onChange={this.onChange}
                            value={sleepQuality}
                            required
                        />
                    </div>
                    {/* Add Sleep Hours */}
                    <div className="form-group">
                        <label>Sleep Hours</label>
                        <input
                            max="24"
                            min="0"
                            className="form-control"
                            type="number"
                            name="sleepHours"
                            onChange={this.onChange}
                            value={sleepHours}
                            required
                        />
                    </div>
                    {/* Add Diet Quality */}
                    <div className="form-group">
                        <label>Diet Quality</label>
                        <input
                            max="3"
                            min="1"
                            className="form-control"
                            type="number"
                            name="dietQuality"
                            onChange={this.onChange}
                            value={dietQuality}
                            required
                        />
                    </div>

                    {/* Add Notes */}
                    <div className="form-group">
                        <label>Notes</label>
                        <input
                            className="form-control"
                            type="textarea"
                            maxLength="200"
                            name="notes"
                            onChange={this.onChange}
                            value={notes}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default connect(null, { addMood })(MoodForm);
