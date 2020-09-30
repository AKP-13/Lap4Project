import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

export class Journal extends Component {
    static propTypes = {};
    render() {
        return (
            <div>
                <h1>Journal</h1>
            </div>
        );
    }
}

export default Journal;
