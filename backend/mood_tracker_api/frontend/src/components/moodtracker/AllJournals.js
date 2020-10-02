import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournal, deleteJournal } from "../../actions/journal";
import ModalJournal from "../layout/ModalJournal";
import "./AllJournals.css";
import Header from "../layout/Header";

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
                <Header />

                <h1 className="titletext2">Journal Entries</h1>
                <ModalJournal />
                {/* map over journals */}
                {this.props.journals.map((journal) => {
                    return (
                        <Fragment key={journal.id}>
                            <div className="moodbox-wrapper1">
                                <div className="item1">
                                    <div id="moodtext">
                                        <h2 className="subtitle5">
                                            {journal.date}
                                        </h2>
                                        <h2 className="subtitle6">
                                            {journal.journal}
                                        </h2>
                                    </div>
                                </div>
                                <div className="item2">
                                    <button
                                        class="ghost-round5"
                                        onClick={this.props.deleteJournal.bind(
                                            this,
                                            journal.id
                                        )}
                                    >
                                        Delete
                                    </button>
                                </div>
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
