import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeMapStateToProps, mapDispatchToProps } from "../store";

export function appWrapper(Component) {
  return withRouter(
    connect(makeMapStateToProps, mapDispatchToProps)(Component)
  );
}
