import React, { Component } from "react";
import { connect } from "react-redux";
import { makeMapStateToProps, mapDispatchToProps } from "../store";
import logo from "../assets/images/logo.svg";
import "./App.css";

class App extends Component {
  onMessageChanged(e) {
    this.props.setFirst(e.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Hello World</h1>
          <p>{this.props.matched}</p>
          <input
            value={this.props.matched}
            onChange={this.onMessageChanged.bind(this)}
          />
        </header>
      </div>
    );
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
