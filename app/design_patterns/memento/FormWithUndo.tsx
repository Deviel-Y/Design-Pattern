"use client";

import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { createMemento } from "./createMemento";

type FormInputType = { name: string; email: string };

const formHistory = createMemento<FormInputType>();

const FormWithUndo = () => {
  const [form, setForm] = useState<FormInputType>({ email: "", name: "" });

  const updateFormHistory = (key: keyof typeof form, value: string) => {
    const newState = { ...form, [key]: value };
    setForm(newState);
    formHistory.save(newState);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-zinc-50">
      <Form className="flex flex-col gap-2 rounded-2xl">
        <Typography.Text className="text-center font-semibold text-3xl">
          MEMENTO PATTERN
        </Typography.Text>
        <Input
          size="large"
          value={form.name}
          placeholder="name"
          onChange={(event) => updateFormHistory("name", event.target.value)}
        />
        <Input
          size="large"
          value={form.email}
          placeholder="email"
          onChange={(event) => updateFormHistory("email", event.target.value)}
        />

        <div className="flex gap-2 mt-2 justify-center">
          <Button
            color="blue"
            variant="solid"
            onClick={() => {
              const state = formHistory.undo();
              if (state) setForm(state);
            }}
          >
            Undo
          </Button>

          <Button
            color="purple"
            variant="solid"
            onClick={() => {
              const state = formHistory.redo();
              if (state) setForm(state);
            }}
          >
            Redo
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormWithUndo;
