import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
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
              alt="Mozilla Mentorship Program Logo"
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
            <Switch>
              <Route
                path="/details"
                component={props => <DetailsStage {...props} />}
              />
              <Route
                path="/expertise"
                component={props => <ExpertiseStage {...props} />}
              />
              <Route
                path="/learning"
                component={props => <LearningStage {...props} />}
              />
              <Route
                path="/role"
                component={props => <RoleStage {...props} />}
              />
              {/* TODO: Check for returning stage */}
              <Route path="/" render={() => <Redirect to="/role" />} />
            </Switch>
          </Router>
        </section>
      </main>
    );
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
