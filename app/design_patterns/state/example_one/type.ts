export type TrafficLightType = {
 label: "Green" | "Red" | "Yellow";
 style: "text-green-500" | "text-red-500" | "text-yellow-500";
 next: () => "green" | "red" | "yellow";
};
