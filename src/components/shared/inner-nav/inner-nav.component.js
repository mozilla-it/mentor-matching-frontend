import React, { Component } from "react";
import { appWrapper } from "../../../utils/component.util";
import classNames from "classnames";
import "./inner-nav.component.scss";

class InnerNav extends Component {
  getNodeState(nodeValue) {
    const currentNodeValue = this.props.getCurrentNode;
    const list = this.props.getNodeList().slice(0);
    let nodeValueIndex = null;
    let currentNodeValueIndex = null;
    for (let i = 0, len = list.length; i < len; i += 1) {
      if (list[i].value === currentNodeValue) {
        currentNodeValueIndex = i;
      }
      if (list[i].value === nodeValue) {
        nodeValueIndex = i;
      }
    }
    if (nodeValueIndex === currentNodeValueIndex) {
      return "present";
    } else if (nodeValueIndex < currentNodeValueIndex) {
      return "past";
    }
    return "future";
  }
  getEdgeState(nodeValue) {
    const currentNodeValue = this.props.getCurrentNode;
    const list = this.props.getNodeList().slice(0);
    let nodeValueIndex = null;
    let currentNodeValueIndex = null;
    for (let i = 0, len = list.length; i < len; i += 1) {
      if (list[i].value === currentNodeValue) {
        currentNodeValueIndex = i;
      }
      if (list[i].value === nodeValue) {
        nodeValueIndex = i;
      }
    }
    if (nodeValueIndex < currentNodeValueIndex) {
      return "past";
    }
    return "future";
  }
  render() {
    return (
      <nav className="inner__nav">
        {this.props.getNodeList().map((node, i) => (
          <div
            key={i}
            className={`nav__node nav__node--n${i + 1} ${this.getNodeState(
              node.value
            )}`}
          >
            <span className="node__label">{node.label}</span>
            <span className="node__bullet"></span>
          </div>
        ))}
        {this.props
          .getNodeList()
          .filter((node, i) => i < this.props.getNodeList().length - 1)
          .map((node, i) => (
            <hr
              key={i}
              className={`nav__node-edge nav__node-edge--n${i +
                1} ${this.getEdgeState(node.value)}`}
            />
          ))}
      </nav>
    );
  }
}

export default appWrapper(InnerNav);
