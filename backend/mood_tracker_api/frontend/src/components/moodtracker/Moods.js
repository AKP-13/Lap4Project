import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods } from "../../actions/moods";

class Moods extends Component {
  render() {
    return (
      <div>
        <h1>Moods list</h1>
      </div>
    );
  }
}

export default connect(Moods);
