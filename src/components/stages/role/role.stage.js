import React, { Component } from "react";
import { connect } from "react-redux";
import { makeMapStateToProps, mapDispatchToProps } from "../../../store";
import PanelComponent from "../../shared/panel/panel.component";
import "./role.scss";
const logoSvg = require("../../../assets/images/logo.svg");

class RoleStage extends Component {
  render() {
    return (
      <PanelComponent>
        <section className="role-section">
          <img
            className="role-section__logo"
            src={logoSvg}
            altText="Mozilla Mentorship Program Logo"
          />
          <h2 className="role-section__header">Mozilla Mentorship Program</h2>
          <p className="role-section__description">
            As a commitment to continuous learning at Mozilla, we're connecting
            employees in order to learn from each other.
          </p>
          <p className="role-section__description">
            How would you like to participate?
          </p>
          <footer className="role-section__action-area">
            <button className="action-area__button">Mentor</button>
            <button className="action-area__button">Mentor and Learner</button>
            <button className="action-area__button">Learner</button>
          </footer>
        </section>
      </PanelComponent>
    );
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(RoleStage);
