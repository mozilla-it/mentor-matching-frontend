import React, { Component } from "react";
import classNames from "classnames";
import "./panel.component.scss";

const InnerNav = () => (
  <nav className="inner__nav">
    <div className="nav__node nav__node--n1">
      <span className="node__label">Role</span>
      <span className="node__bullet"></span>
    </div>
    <hr className="nav__node-edge nav__node-edge--n1" />
    <div className="nav__node nav__node--n2">
      <span className="node__label">Details</span>
      <span className="node__bullet"></span>
    </div>
    <hr className="nav__node-edge nav__node-edge--n2" />
    <div className="nav__node nav__node--n3">
      <span className="node__label">Areas of Expertise</span>
      <span className="node__bullet"></span>
    </div>
    <hr className="nav__node-edge nav__node-edge--n3" />
    <div className="nav__node nav__node nav__node--n4">
      <span className="node__label">Areas for Learning</span>
      <span className="node__bullet"></span>
    </div>
  </nav>
);

export default class PanelComponent extends Component {
  render() {
    return (
      <section
        className={classNames({
          "panel-component": true,
          "show-nav": this.props.showNav
        })}
      >
        {this.props.showNav ? (
          <aside className="panel-component__meta-nav">
            <a className="meta-nav__link" href="#">
              Back
            </a>
          </aside>
        ) : (
          ""
        )}

        <div className="panel-component__inner">
          {this.props.showNav ? <InnerNav /> : ""}
          {this.props.children}
        </div>
      </section>
    );
  }
}
