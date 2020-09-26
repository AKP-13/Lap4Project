import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods } from "../../actions/moods";

class Moods extends Component {
  static propTypes = {
    moods: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Moods list</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moods: state.moods.moods, //we wants the moods reducer and the moods within that! moods=[] now we have a prop called moods
});

export default connect(mapStateToProps)(Moods);
