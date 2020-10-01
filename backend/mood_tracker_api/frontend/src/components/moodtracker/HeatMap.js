import React, { Component, Fragment } from "react";
import HeatMap from "react-heatmap-grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";

const yLabels = ["Week1", "Week2", "Week3", "Week4", "Week5"];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const xLabelsVisibility = new Array(7).fill(true);

class heatMap extends Component {
    static propTypes = {
        moods: PropTypes.array.isRequired,
        getMoods: PropTypes.func.isRequired,
        deleteMood: PropTypes.func.isRequired,
    };

    // to get the Moods before the component mounts
    componentDidMount() {
        this.props.getMoods();
        // console.log("component Did Mount");
    }
    render() {
        // Heat Map Logic
        //make a montly dates array to compare
        var startDate = new Date("2020-10-01"); //YYYY-MM-DD
        var endDate = new Date("2020-11-01"); //YYYY-MM-DD

        var getDateArray = function (start, end) {
            var arr = new Array();
            var dt = new Date(start);
            while (dt <= end) {
                arr.push(new Date(dt).toISOString());
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        };

        var dateArr = getDateArray(startDate, endDate);
        // console.log(dateArr);

        // moodlevelarray and datearray from user's data
        let ourmoods = this.props.moods.map((mood) => mood.moodlevel);
        let ourdates = this.props.moods.map((mood) => mood.date);
        let oursleepQ = this.props.moods.map((mood) => mood.sleepQuality);
        let ourexerciseQ = this.props.moods.map((mood) => mood.exerciseQuality);
        let ourdietQ = this.props.moods.map((mood) => mood.dietQuality);
        let oursleephours = this.props.moods.map((mood) => mood.sleepHours);
        let ournotes = this.props.moods.map((mood) => mood.notes);
        //find indices at which dates match with our comparison array and make a new array of moods
        let indices = [];
        for (const date of ourdates) {
            for (const dat of dateArr) {
                if (dat.includes(date)) {
                    // console.log(dateArr.indexOf(dat));
                    indices.push(dateArr.indexOf(dat));
                }
            }
        }

        let moodsArr = new Array(dateArr.length).fill(0);
        const replaceFunc = (newArr, ourarray) => {
            let i = 0;
            for (let idx of indices) {
                newArr[idx] = ourarray[i];
                i++;
            }
        }
        replaceFunc(moodsArr, ourmoods)
        //need the following arrays for the heatmap on click
        let sleepQArr = new Array(dateArr.length).fill(0)
        let exerciseQArr= new Array(dateArr.length).fill(0)
        let dietQArr = new Array(dateArr.length).fill(0)
        let sleepHArr = new Array(dateArr.length).fill(0)
        let notesArr = new Array(dateArr.length).fill("")
        
        replaceFunc(sleepQArr, oursleepQ)
        replaceFunc(exerciseQArr, ourexerciseQ)
        replaceFunc(dietQArr, ourdietQ)
        replaceFunc(sleepHArr, oursleephours)
        replaceFunc(notesArr, ournotes)
        // console.log(sleepQArr)

        //new date array in string format to compare to days, we wanna splice on first Monday
        var getDateArray2 = function (start, end) {
            var arr = new Array();
            var dt = new Date(start);
            while (dt <= end) {
                arr.push(new Date(dt).toString());
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        };

        var dateArr2 = getDateArray2(startDate, endDate);

        //split the array
        const n = 7;
        let x = [];
        for (const date of dateArr2) {
            if (date.includes("Mon")) {
                x.push(dateArr2.indexOf(date));
            }
        }
        // console.log(x);
        let firstmonday = x[0];
        // console.log(firstmonday);
        // console.log(moodsArr.length);

        const result = new Array(Math.floor(moodsArr.length / n))
            .fill()
            .map((_) => moodsArr.splice(firstmonday, n));

        //for all arrays in result array, if the array has length <7, then fill it with zeros
        for (const arr of result) {
            while (arr.length < 7) {
                arr.push(0);
            }
        }
        // console.log(result);
        //for all the values before first Monday, make another array and fill the first instances with zeros. Push this new array in the results array, at the first position.
        let firstArr = new Array(7);
        //make first positions zeros
        let num = 7 - firstmonday;
        let c = 0;
        for (let i = 0; i < num; i++) {
            firstArr[i] = 0;
        }
        //fill the rest of the values
        for (let i = num; i <= 6; i++) {
            firstArr[i] = moodsArr[c];
            c++;
        }
        // console.log(firstArr);

        result.unshift(firstArr);
        const data = result;
        //function to convert the x,y cords from heatmap to the index in the array, will get invoked onclicking heatmap square 
        const convertToIndex = (x,y) => {
            let heatmapIndex = 7*y + x
            return heatmapIndex
        }
        return (
            <div style={{ fontSize: "13px" }}>
                <HeatMap
                    xLabels={xLabels}
                    yLabels={yLabels}
                    xLabelsLocation={"bottom"}
                    xLabelsVisibility={xLabelsVisibility}
                    xLabelWidth={60}
                    data={data}
                    squares
                    height={45}
                    onClick={(x, y) => alert(`Clicked index ${convertToIndex(x, y)}, \nDate: ${dateArr[convertToIndex(x, y)-num].substring(0,10)}, \nMood Level: ${result[y][x]}, \nSleep Quality: ${sleepQArr[convertToIndex(x, y)-num]}, \nExercise Quality: ${exerciseQArr[convertToIndex(x, y)-num]}, \nDiet Quality: ${dietQArr[convertToIndex(x, y)-num]}, \nHours of Sleep: ${sleepHArr[convertToIndex(x, y)-num]}, \nNotes: ${notesArr[convertToIndex(x, y)-num]}`)}
                    //🎉🎉🎉🎉we could add something prettier than an alert, looks pretty ugly🎉🎉🎉🎉
                    cellStyle={(background, value, min, max, data, x, y) => ({
                        background: `rgb(0, 151, 230, ${
                            1 - (max - value) / (max - min)
                        })`,
                        fontSize: "0px",
                        color: "#444",
                    })}
                    cellRender={(value) => value && <div>{value}</div>}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    moods: state.moods.moods, //we wants the moods reducer and the moods within that! moods=[] now we have a prop called moods
});

export default connect(mapStateToProps, { getMoods, deleteMood })(heatMap);
