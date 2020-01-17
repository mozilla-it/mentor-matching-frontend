import React, { Component } from "react";
import { connect } from "react-redux";
import PanelComponent from "../../shared/panel/panel.component";
import { makeMapStateToProps, mapDispatchToProps } from "../../../store";
import { appWrapper } from "../../../utils/component.util";
import "./details.scss";

class DetailsStage extends Component {
  render() {
    return (
      <PanelComponent>
        <section className="details-section">
          <p>Hello world</p>
        </section>
      </PanelComponent>
    );
  }
}

export default appWrapper(DetailsStage);
