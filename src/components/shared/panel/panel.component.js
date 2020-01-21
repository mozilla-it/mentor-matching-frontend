import React, { Component } from "react";
import { Redirect } from "react-router";
import classNames from "classnames";
import InnerNav from "../inner-nav/inner-nav.component";
import "./panel.component.scss";
import { appWrapper, getLocationNode } from "../../../utils/component.util";

class PanelComponent extends Component {
  navigateBack() {
    this.props.stepBack();
  }
  render() {
    if (getLocationNode(this.props.location) !== this.props.getCurrentNode()) {
      return <Redirect to={`/${this.props.getCurrentNode()}`} />;
    }
    return (
      <section
        className={classNames({
          "panel-component": true,
          "show-nav": !this.props.hideNav
        })}
      >
        {!this.props.hideNav ? (
          <aside className="panel-component__meta-nav">
            <button
              className="meta-nav__link"
              onClick={() => this.navigateBack()}
            >
              Back
            </button>
          </aside>
        ) : (
          ""
        )}

        <div className="panel-component__inner">
          {!this.props.hideNav ? <InnerNav /> : ""}
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default appWrapper(PanelComponent);
