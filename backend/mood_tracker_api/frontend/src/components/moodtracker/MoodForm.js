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
                <h2 id="new-mood-input-title">Add new mood data</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            className="inputform6"
                            type="date"
                            name="date"
                            onChange={this.onChange}
                            value={date}
                            required
                        />
                    </div>
                    {/* Add Mood Level */}
                    <div className="form1">
                        <input
                            max="5"
                            min="1"
                            className="inputform6"
                            type="number"
                            name="moodlevel"
                            placeholder="Mood-level"
                            onChange={this.onChange}
                            value={moodlevel}
                            required
                        />
                    </div>
                    {/* Add Exercise Level */}
                    <div className="form1">
                        <input
                            max="3"
                            min="1"
                            className="inputform6"
                            type="number"
                            name="exerciseQuality"
                            placeholder="Exercise-level"
                            onChange={this.onChange}
                            value={exerciseQuality}
                            required
                        />
                    </div>
                    {/* Add Sleep Quality Level */}
                    <div className="form1">
                        <input
                            max="3"
                            min="1"
                            className="inputform6"
                            type="number"
                            name="sleepQuality"
                            onChange={this.onChange}
                            placeholder="Sleep-Quality"
                            value={sleepQuality}
                            required
                        />
                    </div>
                    {/* Add Sleep Hours */}
                    <div className="form1">
                        <input
                            max="24"
                            min="0"
                            className="inputform6"
                            type="number"
                            name="sleepHours"
                            placeholder="Sleep-Hours"
                            onChange={this.onChange}
                            value={sleepHours}
                            required
                        />
                    </div>
                    {/* Add Diet Quality */}
                    <div className="form1">
                        <input
                            max="3"
                            min="1"
                            className="inputform6"
                            type="number"
                            name="dietQuality"
                            onChange={this.onChange}
                            placeholder="Diet-Quality"
                            value={dietQuality}
                            required
                        />
                    </div>

                    {/* Add Notes */}
                    <div className="form1">
                        <input
                            className="inputform7"
                            type="textarea"
                            maxLength="200"
                            name="notes"
                            placeholder="Notes"
                            onChange={this.onChange}
                            value={notes}
                        />
                    </div>

                    <div className="form1">
                        <button type="submit" className="ghost-round7">
                            Submit
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default connect(null, { addMood })(MoodForm);
