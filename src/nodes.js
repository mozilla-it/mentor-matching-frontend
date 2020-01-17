import RoleStage from "./components/stages/role/role.stage";
import DetailsStage from "./components/stages/details/details.stage";
import ExpertiseStage from "./components/stages/expertise/expertise.stage";
import LearningStage from "./components/stages/learning/learning.stage";
import { roleTypes } from "./store/state/role.state";

export const fullNodeList = [
  {
    value: "role",
    label: "Role",
    component: RoleStage
  },
  {
    value: "details",
    label: "Details",
    component: DetailsStage
  },
  {
    value: "expertise",
    label: "Areas of Expertise",
    component: ExpertiseStage
  },
  {
    value: "learning",
    label: "Areas for Learning",
    component: LearningStage
  }
];

export function getNodeList(role) {
  if (role === roleTypes.LEARNER) {
    return fullNodeList.filter(node => node.value !== "expertise");
  } else if (role === roleTypes.MENTOR) {
    return fullNodeList.filter(node => node.value !== "learning");
  } else {
    return fullNodeList;
  }
}
