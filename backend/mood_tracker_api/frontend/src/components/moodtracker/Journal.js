import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

export class Journal extends Component {
    state = {
        journalEntry: "",
    };

    static propTypes = {};

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.journalEntry);
    };

    render() {
        const { journalEntry } = this.state;

        return (
            <div>
                <h1>Journal</h1>
                <form id="journalForm" onSubmit={this.onSubmit}>
                    <label htmlFor="journal">Add a jounral entry:</label>

                    <textarea
                        id="journal"
                        name="journalEntry"
                        rows="5"
                        cols="33"
                        onChange={this.onChange}
                        value={journalEntry}
                        placeholder="Thoughts for the day..."
                    ></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Journal;
