import { actionTypes } from "./actions";

const initialState = {
  text: "hello world!"
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
