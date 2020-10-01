import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournal, deleteJournal } from "../../actions/journal";
import ModalJournal from "../layout/ModalJournal";
import "./AllJournals.css";

class AllJournals extends Component {
    static propTypes = {
        journals: PropTypes.array.isRequired,
        getJournal: PropTypes.func.isRequired,
        deleteJournal: PropTypes.func.isRequired,
    };

    // to get the Moods before the component mounts
    componentDidMount() {
        this.props.getJournal();
        console.log("component Did Mount");
    }

    render() {
        console.log(this.props.journals);
        return (
            <Fragment>
                <ModalJournal />
                <h1>Journal Entries</h1>
                {/* map over journals */}
                {this.props.journals.map((journal) => {
                    return (
                        <Fragment key={journal.id}>
                            <div id="journalEntries">
                                <h2>{journal.date}</h2>
                                <p>{journal.journal}</p>
                                <button
                                    onClick={this.props.deleteJournal.bind(
                                        this,
                                        journal.id
                                    )}
                                >
                                    Delete
                                </button>
                            </div>
                        </Fragment>
                    );
                })}
                {/* end of map over journals */}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    journals: state.journal.journals, //JOURNAL is the key state name (check redux), Journals is the state name ; we wants the moods reducer and the moods within that! moods=[] now we have a prop called moods
});

export default connect(mapStateToProps, { getJournal, deleteJournal })(
    AllJournals
);
