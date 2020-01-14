import React, { Component } from "react";
import { connect } from "react-redux";
import { makeMapStateToProps, mapDispatchToProps } from "../../../store";
import "./details.scss";

class DetailsStage extends Component {
  render() {
    return <h1>Details page</h1>;
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(DetailsStage);
