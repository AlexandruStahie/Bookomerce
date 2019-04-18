import React, { Component } from "react";
import Router from "./Router";
import Navigation from "./containers/Header";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <div style={{ height: "2rem", marginTop: "4.5rem" }} />
        <Router />
      </div>
    );
  }
}

export default App;
