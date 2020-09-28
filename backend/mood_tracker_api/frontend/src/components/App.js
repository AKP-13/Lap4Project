import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

// components
import Header from "./layout/Header";
import Dashboard from "./moodtracker/Dashboard";
import Alerts from "./layout/Alerts";

// redux store
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <Dashboard />
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
