import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

class Moods extends Component {
  static propTypes = {
    moods: PropTypes.array.isRequired,
    getMoods: PropTypes.func.isRequired,
    deleteMood: PropTypes.func.isRequired,
  };

  // to get the Moods before the component mounts
  componentDidMount() {
    this.props.getMoods();
    console.log("component Did Mount");
  }

  render() {
    console.log(this.props.moods);
    return (
      <Fragment>
        <h2>Moods:</h2>
        {/* map over moods */}
        {this.props.moods.map((mood) => {
          return (
            <Fragment key={mood.id}>
              <h2>
                Mood Id: {mood.id} | Mood Date: {mood.date} | Mood Level:
                {mood.moodlevel}
              </h2>
              {/* delete button */}
              <button onClick={this.props.deleteMood.bind(this, mood.id)}>
                Delete
              </button>
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
