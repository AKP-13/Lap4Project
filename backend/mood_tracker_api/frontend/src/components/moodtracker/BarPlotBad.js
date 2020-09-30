import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

class BarPlotBad extends Component {
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
    for (let i = 0; i <= moodlevels.length - 1; i++) {
      if (moodlevels[i] == 1 || moodlevels[i] == 2) {
        idxs.push(i);
      }
    }
    //filter only those indices function
    function filterArr(oldarr, newarr) {
      for (let idx of idxs) {
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

    const chartData = {
      labels: ["Exercise", "Sleep", "Diet"],
      datasets: [
        {
          // label: "Population",
          data: [exerciseavg, sleepavg, dietavg],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
          ],
        },
      ],
    };

    return (
      <div>
        <h4>
          Your mood was not so good when you rated your habits as follows:
        </h4>
        {/* change hover over number to ceiling */}
        {/* Bar Chart for Bad Days */}
        <div class="barplot">
          <Bar
            data={chartData}
            options={{
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 3,
                      min: 0,
                      stepSize: 1,
                    },
                    gridLines: {
                      drawOnChartArea: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      drawOnChartArea: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moods: state.moods.moods,
});

export default connect(mapStateToProps, { getMoods, deleteMood })(BarPlotBad);
