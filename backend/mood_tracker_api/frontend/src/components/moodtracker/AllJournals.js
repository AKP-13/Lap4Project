import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournal, deleteJournal } from "../../actions/journal";

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
                <h2>Journals:</h2>
                {/* map over journals */}
                {this.props.journals.map((journal) => {
                    return (
                        <Fragment key={journal.id}>
                            <h2>
                                Journal Id: {journal.id} | Journal Date:{" "}
                                {journal.date} | {journal.date} | Journal Text:
                                {journal.journal}
                            </h2>
                            <button
                                onClick={this.props.deleteJournal.bind(
                                    this,
                                    journal.id
                                )}
                            >
                                Delete
                            </button>
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
