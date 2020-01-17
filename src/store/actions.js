import { roleTypes } from "../store/state/role.state";

export const actionTypes = {
  SET_ROLE: "SET_ROLE",
  SET_DETAILS: "SET_DETAILS"
};

export function setRole(role) {
  if (Object.values(roleTypes).indexOf(role) === -1) {
    throw new Error(`Invalid role: ${role}`);
  }
  return {
    type: actionTypes.SET_ROLE,
    role
  };
}

export function setDetails(details) {
  return {
    type: actionTypes.SET_DETAILS,
    details
  };
}
