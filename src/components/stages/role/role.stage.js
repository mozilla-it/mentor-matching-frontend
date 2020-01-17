import React, { Component } from "react";
import { appWrapper } from "../../../utils/component.util";
import PanelComponent from "../../shared/panel/panel.component";
import { roleTypes } from "../../../store/state/role.state";
import "./role.scss";
const logoSvg = require("../../../assets/images/logo.svg");

const actions = [
  {
    key: roleTypes.MENTOR,
    label: "Mentor"
  },
  {
    key: roleTypes.LEARNER_MENTOR,
    label: "Mentor and Learner"
  },
  {
    key: roleTypes.LEARNER,
    label: "Learner"
  }
];

class RoleStage extends Component {
  proceedWithRole(role) {
    this.props.setRole(role);
    this.props.history.push("/details");
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <PanelComponent hideNav={true}>
        <section className="role-section">
          <img
            className="role-section__logo"
            src={logoSvg}
            alt="Mozilla Mentorship Program Logo"
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
            {actions.map((action, idx) => (
              <button
                key={idx}
                className="action-area__button"
                onClick={e => this.proceedWithRole(action.key)}
              >
                {action.label}
              </button>
            ))}
          </footer>
        </section>
      </PanelComponent>
    );
  }
}

export default appWrapper(RoleStage);
