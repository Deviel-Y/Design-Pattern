"use client";

import { Button } from "antd";
import { useState } from "react";
import { map } from "./stateManager";

const TrafficLight = () => {
 const [currentState, setCurrentState] = useState<keyof typeof map>("red");

 const state = map[currentState];

 return (
  <div className="flex flex-col gap-5 h-screen justify-center items-center bg-zinc-200">
   <p>
    The traffic light is <span className={state.style}>{state.label}</span>
   </p>

   <Button
    variant="solid"
    color="blue"
    onClick={() => setCurrentState(state.next())}
   >
    Next State
   </Button>
  </div>
 );
};

export default TrafficLight;
