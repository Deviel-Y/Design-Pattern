# GoF Design Patterns in React & TypeScript

This repository contains practical, modern implementations of the **Gang of Four (GoF)** design patterns using **React, TypeScript, and functional programming principles**.

Most examples found online use classical OOP with classes. This project rewrites those patterns using **React hooks, functional composition, and TypeScript generics** — making them more relevant for real-world frontend development.

The goal of this repository is to:

- Translate GoF patterns into **idiomatic React/TypeScript** forms.
- Focus on **practical and minimal examples**, not academic boilerplate.
- Provide **two examples per pattern**, often a UI example + a core logic example.
- Show how traditional patterns map to **modern frontend architecture**.

---

# Tech Stack

- **React (TypeScript)**
- **React Hooks** instead of OOP classes
- Functional patterns where applicable
- Vite/Next.js examples depending on context
- Modern ES modules

---

# Patterns Covered (GoF)

Each pattern includes:

- A short explanation
- A logical/algorithmic implementation
- A React-specific implementation (hooks/components)
- When to use it in frontend development

### Creational Patterns

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

### Structural Patterns

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### Behavioral Patterns

- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

---

# Philosophy

GoF patterns were written for the OOP era. This repo reinterprets them for modern frontend development:

- Prefer **functions over classes**.
- Prefer **hooks over manual observer systems**.
- Prefer **composition over inheritance**.
- Prefer immutability where possible.

The goal is not to "force" patterns into React — but to show their natural equivalents.

---

# Project Structure

```
app/
  design_patterns/
    [pattern-name]/
      example_one/
        core1.ts
        Component1.tsx
      example_two/
        core2.ts
        Component2.tsx
```

Each pattern contains two complete TSX examples that can be imported directly into your `app.tsx` or any other component.

Example:

```ts
import ExampleOne from "./design_patterns/memento/example_one/ExampleOne";

export default function App() {
  return <ExampleOne />;
}
```

---

# Running Examples

```
npm install
npm run dev
```

---

# Contributions

PRs are welcome — especially:

- More UI examples
- Alternative implementations
- Edge-case explanations

---

# License

MIT
