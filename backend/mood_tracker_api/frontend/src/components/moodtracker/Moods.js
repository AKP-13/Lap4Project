import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods } from "../../actions/moods";

class Moods extends Component {
  static propTypes = {
    moods: PropTypes.array.isRequired,
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
        {this.props.moods.map((moods) => {
          console.log(moods);
          return (
            <h2 key={moods.id}>
              Mood Id: {moods.id} | Mood Date: {moods.date} | Mood Level:
              {moods.moodlevel}
            </h2>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  moods: state.moods.moods, //we wants the moods reducer and the moods within that! moods=[] now we have a prop called moods
});

export default connect(mapStateToProps, { getMoods })(Moods);
