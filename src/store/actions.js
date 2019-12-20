export const actionTypes = {
  FIRST: "FIRST"
};

export function setFirst(text) {
  return {
    type: actionTypes.FIRST,
    text
  };
}
