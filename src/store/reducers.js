import { actionTypes } from "./actions";
import { detailsState } from "./state/details.state";
import { expertiseState } from "./state/expertise.state";
import { learningState } from "./state/learning.state";
import { roleState } from "./state/role.state";

const initialState = {
  ...detailsState,
  ...expertiseState,
  ...learningState,
  ...roleState
};

export default function mentorMatch(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIRST:
      const { text } = action;
      return {
        ...state,
        text
      };
    default:
      return state;
  }
}
