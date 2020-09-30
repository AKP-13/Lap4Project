import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { getMoods, deleteMood } from "../../actions/moods";
import { addJournal, getJournal, deleteJournal } from "../../actions/journal";

export class Journal extends Component {
    state = {
        date: "",
        journal: "",
    };

    static propTypes = {
        addJournal: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { date, journal } = this.state;
        const entry = { date, journal };
        console.log(entry);
        this.props.addJournal(entry);
        this.setState({
            date: "",
            journal: "",
        });
    };

    render() {
        const { journal, date } = this.state;

        return (
            <div>
                <h1>Journal</h1>
                <form id="journalForm" onSubmit={this.onSubmit}>
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        className="form-control"
                        type="date"
                        name="date"
                        onChange={this.onChange}
                        value={date}
                    />

                    <label htmlFor="journal">Add a journal entry:</label>
                    <textarea
                        id="journal"
                        name="journal"
                        rows="5"
                        cols="33"
                        onChange={this.onChange}
                        value={journal}
                        placeholder="Thoughts for the day..."
                    ></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default connect(null, { addJournal })(Journal);
