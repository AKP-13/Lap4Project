import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {


  render() {
    return (
        <h1>Hey I Am rendered</h1>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);