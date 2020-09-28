import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.date) alert.error(`Date: ${error.msg.date.join()}`); //join turns into string
      if (error.msg.moodlevel)
        alert.error(`Mood Level: ${error.msg.moodlevel.join()}`);
    }

    if (message !== prevProps.mesasge) {
      if (message.deleteMood) alert.success(message.deleteMood);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
