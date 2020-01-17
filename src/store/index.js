import { createStore } from "redux";
import mentorMatch from "./reducers";
import * as selectors from "./selectors";
import * as actions from "./actions";
import { getNodeList } from "../nodes";

export default createStore(mentorMatch);

export function makeMapStateToProps() {
  return (state, props) => {
    return {
      getRole: selectors.getRole(state, props),
      getCurrentNode: selectors.getCurrentNode(state, props),
      getNodeList: () => getNodeList(state.role)
    };
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setRole: role => dispatch(actions.setRole(role)),
    setDetails: details => dispatch(actions.setDetails(details))
  };
}
