import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';

// components
import Header from './layout/Header'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <h1>Hey I Am rendering</h1>
        </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));