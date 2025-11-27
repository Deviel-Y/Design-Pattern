"use client";

import { Button, Typography } from "antd";
import { useState } from "react";
import { stateMapping } from "./stateManager";

export default function AuthMachine() {
 const [current, setCurrent] = useState<keyof typeof stateMapping>("LOGGED_IN");

 const state = stateMapping[current];

 return (
  <div className="h-screen bg-zinc-200 flex flex-col justify-center items-center">
   <Typography.Paragraph className="font-bold text-xl!">
    Current state: {state.label}
   </Typography.Paragraph>

   <div className="my-3">{state.ui}</div>

   <div className="flex gap-2">
    {state.login && (
     <Button
      variant="solid"
      color="blue"
      onClick={() => {
       if (!state.login) return;
       const next = state.login();
       setCurrent(next);
      }}
      className="border px-3 py-1"
     >
      Login
     </Button>
    )}
    {state.logout && (
     <Button
      variant="solid"
      color="red"
      onClick={() => {
       if (!state.logout) return;
       const next = state.logout();
       setCurrent(next);
      }}
      className="border px-3 py-1"
     >
      Logout
     </Button>
    )}
   </div>
  </div>
 );
}
