import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

class BarPlot extends Component {
    static propTypes = {
        moods: PropTypes.array.isRequired,
        getMoods: PropTypes.func.isRequired,
        deleteMood: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMoods();
    }

    render() {
        return (
            <div>
                <h4>BAR PLOT WILL GO HERE</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    moods: state.moods.moods,
});

export default connect(mapStateToProps, { getMoods, deleteMood })(BarPlot);
