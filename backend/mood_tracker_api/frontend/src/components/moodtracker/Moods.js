import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";
import Header from "../layout/Header";
import "./Mood.css";

class Moods extends Component {
    static propTypes = {
        moods: PropTypes.array.isRequired,
        getMoods: PropTypes.func.isRequired,
        deleteMood: PropTypes.func.isRequired,
    };

    // to get the Moods before the component mounts
    componentDidMount() {
        this.props.getMoods();
        // console.log("component Did Mount");
    }

    render() {
        console.log(this.props.moods);
        return (
            <Fragment>
                <Header />
                <h2 className="titletext1">Moods:</h2>

                {/* map over moods */}
                {this.props.moods.map((mood) => {
                    return (
                        <Fragment key={mood.id}>
                            <div className="moodbox-wrapper">
                                <div className="item1">
                                    <div class="moodtext">
                                        <h3 className="subtitle3">
                                            Mood Date: {mood.date}
                                        </h3>
                                        <h3 className="subtitle4">
                                            Exercise Level:{" "}
                                            {mood.exerciseQuality}
                                        </h3>
                                        <h3 className="subtitle4">
                                            Sleep Quality: {mood.sleepQuality}
                                        </h3>
                                        <h3 className="subtitle4">
                                            Sleep Hours: {mood.sleepHours}
                                        </h3>
                                        <h3 className="subtitle4">
                                            Diet Quality: {mood.dietQuality}
                                        </h3>
                                        <h3 className="subtitle4">
                                            Notes:{" "}
                                            <h3 className="notestext">
                                                {mood.notes}
                                            </h3>
                                        </h3>
                                    </div>
                                </div>
                                {/* item 2 */}
                                <div className="item2">
                                    <button
                                        class="ghost-round4"
                                        onClick={this.props.deleteMood.bind(
                                            this,
                                            mood.id
                                        )}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
                {/* end of map over moods */}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    moods: state.moods.moods, //we wants the moods reducer and the moods within that! moods=[] now we have a prop called moods
});

export default connect(mapStateToProps, { getMoods, deleteMood })(Moods);
