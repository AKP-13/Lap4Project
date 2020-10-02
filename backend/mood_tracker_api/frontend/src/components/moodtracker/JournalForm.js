import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addJournal } from "../../actions/journal";
import "./JournalForm.css";

class JournalForm extends Component {
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

        this.props.closeModal();
    };

    render() {
        const { journal, date } = this.state;
        return (
            <div>
                <h1 id="journalformheader">Journal</h1>
                <form id="journalForm" onSubmit={this.onSubmit}>
                    <label id="datelabel" htmlFor="date">
                        Date:
                    </label>
                    <input
                        id="date"
                        className="form-control"
                        type="date"
                        name="date"
                        onChange={this.onChange}
                        value={date}
                    />
                    <br />
                    {/* <label htmlFor="journal">Journal your day</label> */}
                    <textarea
                        id="journal"
                        name="journal"
                        rows="15"
                        cols="45"
                        onChange={this.onChange}
                        value={journal}
                        placeholder="Thoughts for the day..."
                    ></textarea>
                    <br />
                    <input
                        id="addjournal"
                        type="submit"
                        value="Add to my journal"
                    ></input>
                </form>
            </div>
        );
    }
}

export default connect(null, { addJournal })(JournalForm);
