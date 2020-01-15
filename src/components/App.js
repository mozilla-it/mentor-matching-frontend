import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import { makeMapStateToProps, mapDispatchToProps } from "../store";
import RoleStage from "./stages/role/role.stage";
import DetailsStage from "./stages/details/details.stage";
import ExpertiseStage from "./stages/expertise/expertise.stage";
import LearningStage from "./stages/learning/learning.stage";

import "./app.scss";

const logoSvg = require("../assets/images/logo.svg");

class App extends Component {
  constructor(data) {
    super(data);
    this.state = {
      dropdownVisible: false
    };
  }
  onDropdownToggled(e) {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }
  render() {
    return (
      <main className="app">
        <header className="header">
          <aside className="header-heading">
            <img
              className="heading__logo"
              src={logoSvg}
              altText="Mozilla Mentorship Program Logo"
            />
            <h1>Mozilla Mentorship Program</h1>
          </aside>
          <aside className="header-settings">
            <span
              className={classNames({
                "header-settings__label": true,
                active: this.state.dropdownVisible
              })}
              onClick={this.onDropdownToggled.bind(this)}
            >
              username@mozilla.com
            </span>
            {this.state.dropdownVisible ? (
              <div className="settings-dropdown">
                <a className="logout-link" href="#">
                  Sign out
                </a>
              </div>
            ) : (
              ""
            )}
          </aside>
        </header>
        <section className="stage-container">
          <Router>
            <Route path="/details" component={DetailsStage} />
            <Route path="/expertise" component={ExpertiseStage} />
            <Route path="/learning" component={LearningStage} />
            <Route path="/role" component={RoleStage} />
            {/* TODO: Check for returning stage */}
            <Route render={() => <Redirect to="/role" />} />
          </Router>
        </section>
      </main>
    );
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
