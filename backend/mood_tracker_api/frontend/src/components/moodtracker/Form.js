import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMood } from "../../actions/moods";

class Form extends Component {
  state = {
    date: "",
    moodlevel: "",
    user: "",
  };

  static propTypes = {
    addMood: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { date, moodlevel, user } = this.state;
    const mood = { date, moodlevel, user };
    this.props.addMood(mood);
    this.setState({
      date: "",
      moodlevel: "",
    });
    console.log("submit");
  };

  render() {
    const { date, moodlevel } = this.state;
    return (
      <div>
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Date</label>
            <input
              className="form-control"
              type="date"
              name="date"
              onChange={this.onChange}
              value={date}
            />
          </div>
          <div className="form-group">
            <label>Mood-level</label>
            <input
              className="form-control"
              type="number"
              name="moodlevel"
              onChange={this.onChange}
              value={moodlevel}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addMood })(Form);
