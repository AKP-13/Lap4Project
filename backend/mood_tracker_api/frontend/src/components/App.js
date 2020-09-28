import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// components
import Header from "./layout/Header";
import Dashboard from "./moodtracker/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./users/Login";
import Register from "./users/Register";
import PrivateRoute from "./common/PrivateRoute";

// redux store
import { Provider } from "react-redux";
import store from "../store";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
