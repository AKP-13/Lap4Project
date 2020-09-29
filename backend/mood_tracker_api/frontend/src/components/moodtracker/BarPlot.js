import React, { Component, Fragment } from "react";
import BarChart from 'react-bar-chart';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoods, deleteMood } from "../../actions/moods";
 
class BarPlot extends Component{
    static propTypes = {
        moods: PropTypes.array.isRequired,
        getMoods: PropTypes.func.isRequired,
        deleteMood: PropTypes.func.isRequired,
    };
    // getInitialState() {
    //     return { width: 500 };
    // }
 
//   componentDidMount() {
//     window.onresize = () => {
//      this.setState({width: this.refs.root.offsetWidth}); 
//     };
//   }
 
    handleBarClick(element, id) { 
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    componentDidMount() {
        this.props.getMoods();
    }
    
    render() {
        let exerciseL = this.props.moods.map((mood) => mood.exerciseQuality);
        let dietL = this.props.moods.map((mood) => mood.dietQuality);
        let sleepL = this.props.moods.map((mood) => mood.sleepQuality);
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
        let sleepavg = arrAvg(sleepL)
        let exerciseavg = arrAvg(exerciseL)
        let dietavg = arrAvg(dietL)

        console.log(exerciseL)
        const data = [
            {text: 'exercise', value: exerciseavg},
            {text: 'diet', value: dietavg}, 
            {text: 'sleep', value: sleepavg} 
          ];
           
        const margin = {top: 20, right: 20, bottom: 30, left: 40};
        let yaxis = [1, 2, 3]

        return (
            <div>
                <h4>Your mood was at its best when you rated your habits as follows:</h4>
                {/* still need to filter for only good moods!!! */}
                <div style={{width: '50%'}}> 
                    <BarChart ylabel='Level'
                    yaxis={yaxis}
                    width={300}
                    height={300}
                    margin={margin}
                    data={data}
                    onBarClick={this.handleBarClick}/>
                </div>
            </div>
        );
    }
    };

const mapStateToProps = (state) => ({
    moods: state.moods.moods, 
});

export default connect(mapStateToProps, { getMoods, deleteMood })(BarPlot);
