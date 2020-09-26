import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header";
import Dashboard from "./moodtracker/Dashboard";

// redux store
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Dashboard />
        </Fragment>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
