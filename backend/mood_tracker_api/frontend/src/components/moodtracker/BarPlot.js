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
        let exerciseL = this.props.moods.map((mood) => mood.exerciseQuality);
        let dietL = this.props.moods.map((mood) => mood.dietQuality);
        let sleepL = this.props.moods.map((mood) => mood.sleepQuality);
        let moodlevels = this.props.moods.map((mood) => mood.moodlevel);
        //fget indices of good moods only
        let idxs = [];
        for (i = 0; i <= moodlevels.length - 1; i++) {
            if (moodlevels[i] == 5 || moodlevels[i] == 4) {
                idxs.push(i);
            }
        }
        //filter only those indices function
        function filterArr(oldarr, newarr) {
            for (idx of idxs) {
                newarr.push(oldarr[idx]);
            }
        }
        //invoke
        let filtereddiet = [];
        let filteredexercise = [];
        let filteredsleep = [];
        filterArr(dietL, filtereddiet);
        filterArr(sleepL, filteredsleep);
        filterArr(exerciseL, filteredexercise);
        //get average
        const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
        let sleepavg = arrAvg(filteredsleep);
        let exerciseavg = arrAvg(filteredexercise);
        let dietavg = arrAvg(filtereddiet);

        console.log(exerciseL);
        // const data = [
        //     { text: "exercise", value: exerciseavg },
        //     { text: "diet", value: dietavg },
        //     { text: "sleep", value: sleepavg },
        // ];

        return (
            <div>
                <h4>
                    Your mood was at its best when you rated your habits as
                    follows:
                </h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    moods: state.moods.moods,
});

export default connect(mapStateToProps, { getMoods, deleteMood })(BarPlot);
