import { TrafficLightType } from "../type";

export const greenState: TrafficLightType = {
 label: "Green",
 style: "text-green-500",
 next: () => {
  return "yellow";
 },
};
