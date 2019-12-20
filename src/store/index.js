import { createStore } from "redux";
import mentorMatch from "./reducers";
import * as selectors from "./selectors";
import * as actions from "./actions";

export default createStore(mentorMatch);

export const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      matched: selectors.getMatched(state, props)
    };
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    setFirst: text => dispatch(actions.setFirst(text))
  };
};
