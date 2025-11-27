import { TrafficLightType } from "../type";

export const redState: TrafficLightType = {
 label: "Red",
 style: "text-red-500",
 next: () => {
  return "green";
 },
};
