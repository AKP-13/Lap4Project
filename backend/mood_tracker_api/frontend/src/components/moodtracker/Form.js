import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMood } from "../../actions/moods";

class Form extends Component {
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
            <div>
                <h2>Reflection Board</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="date"
                            onChange={this.onChange}
                            value={date}
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
            </div>
        );
    }
}

export default connect(null, { addMood })(Form);
