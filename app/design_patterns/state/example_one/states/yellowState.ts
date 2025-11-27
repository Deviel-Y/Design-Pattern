import { TrafficLightType } from "../type";

export const yellowState: TrafficLightType = {
 label: "Yellow",
 style: "text-yellow-500",
 next: () => {
  return "red";
 },
};
