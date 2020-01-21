import { actionTypes } from "./actions";
import { detailsState } from "./state/details.state";
import { expertiseState } from "./state/expertise.state";
import { learningState } from "./state/learning.state";
import { roleState } from "./state/role.state";
import { getNodeList, fullNodeList } from "../nodes";

const initialState = {
  ...detailsState,
  ...expertiseState,
  ...learningState,
  ...roleState,
  currentNode: fullNodeList[0].value
};

export default function mentorMatch(state = initialState, action) {
  const nodeList = getNodeList(state.role);
  switch (action.type) {
    case actionTypes.SET_ROLE:
      const { role } = action;
      return {
        ...state,
        role,
        currentNode: nodeList[1].value
      };
    case actionTypes.SET_DETAILS:
      const { details } = action;
      return {
        ...state,
        ...details,
        currentNode: nodeList[2].value
      };
    case actionTypes.STEP_BACK:
      let currentIndex = null;
      for (let i = 0, len = nodeList.length; i < len; i += 1) {
        if (nodeList[i].value === state.currentNode) {
          currentIndex = i;
          break;
        }
      }
      return {
        ...state,
        currentNode: nodeList[currentIndex - 1].value
      };
    default:
      return state;
  }
}
