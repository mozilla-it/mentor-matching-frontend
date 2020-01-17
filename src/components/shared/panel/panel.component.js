import React, { Component } from "react";
import classNames from "classnames";
import InnerNav from "../inner-nav/inner-nav.component";
import "./panel.component.scss";

export default class PanelComponent extends Component {
  render() {
    return (
      <section
        className={classNames({
          "panel-component": true,
          "show-nav": !this.props.hideNav
        })}
      >
        {!this.props.hideNav ? (
          <aside className="panel-component__meta-nav">
            <a className="meta-nav__link" href="#">
              Back
            </a>
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
