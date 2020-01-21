import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeMapStateToProps, mapDispatchToProps } from "../store";

export function appWrapper(Component) {
  return withRouter(
    connect(makeMapStateToProps, mapDispatchToProps)(Component)
  );
}

export function getLocationNode(location) {
  if (!location) {
    return "";
  }
  return location.pathname.substring(location.pathname.indexOf("/") + 1);
}
