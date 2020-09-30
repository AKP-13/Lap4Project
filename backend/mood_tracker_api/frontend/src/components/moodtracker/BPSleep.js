import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

class BPSleep extends Component {
    static propTypes = {
        moods: PropTypes.array.isRequired,
        getMoods: PropTypes.func.isRequired,
        deleteMood: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMoods();
    }

    render() {
        let sleephours = this.props.moods.map((mood) => mood.sleepHours);
        let moodlevels = this.props.moods.map((mood) => mood.moodlevel);
        //fget indices of good moods only
        let idxs = [];
        for (let i = 0; i <= moodlevels.length - 1; i++) {
            if (moodlevels[i] == 5 || moodlevels[i] == 4) {
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
        let sleephours2 = [];
        filterArr(sleephours, sleephours2);
        //count instances of each sleep hours duration
        function counter(arr, val) {
            var n = 0;
            for (let i = 0; i <= arr.length - 1; i++) {
                if (arr[i] == val) {
                    n++;
                }
            }
            return n;
        }
        let four = counter(sleephours2, 4);
        let five = counter(sleephours2, 5);
        let six = counter(sleephours2, 6);
        let seven = counter(sleephours2, 7);
        let eight = counter(sleephours2, 8);
        let nine = counter(sleephours2, 9);
        let ten = counter(sleephours2, 10);
        let eleven = counter(sleephours2, 11);

        const chartData = {
            labels: ["4", "5", "6", "7", "8", "9", "10", "11"],
            datasets: [
                {
                    // label: "Population",
                    data: [four, five, six, seven, eight, nine, ten, eleven],
                    backgroundColor: [
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                    ],
                },
            ],
        };

        return (
            <div>
                <h4>
                    Frequency of hours of sleep when your mood was at its best:
                </h4>
                {/* change hover over number to ceiling */}

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
                                        max: 10,
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
        );
    }
}

const mapStateToProps = (state) => ({
    moods: state.moods.moods,
});

export default connect(mapStateToProps, { getMoods, deleteMood })(BPSleep);
