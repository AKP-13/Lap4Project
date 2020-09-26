import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header";
import Dashboard from "./moodtracker/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
