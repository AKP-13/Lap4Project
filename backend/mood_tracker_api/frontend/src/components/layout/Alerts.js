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
            if (error.msg.non_field_errors)
                alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
            if (error.msg.sleepQuality)
                alert.error(`Sleep Quality: ${error.msg.sleepQuality.join()}`);
            if (error.msg.sleepHours)
                alert.error(`Sleep Hours: ${error.msg.sleepHours.join()}`);
            if (error.msg.exerciseQuality)
                alert.error(
                    `Exercise Quality: ${error.msg.exerciseQuality.join()}`
                );
            if (error.msg.dietQuality)
                alert.error(`Diet Quality: ${error.msg.dietQuality.join()}`);
        }

        if (message !== prevProps.mesasge) {
            if (message.deleteMood) alert.success(message.deleteMood);
            if (message.addMood) alert.success(message.addMood);
            if (message.deleteJournal) alert.success(message.deleteJournal);
            if (message.addEntry) alert.success(message.addEntry);
            if (message.passwordsNotMatch)
                alert.error(message.passwordsNotMatch);
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
