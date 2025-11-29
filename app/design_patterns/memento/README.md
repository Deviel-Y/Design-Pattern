# Memento Pattern (React & TypeScript Version)

The **Memento Pattern** allows you to capture and restore an object's state without exposing its internal structure. It is typically used for **undo/redo systems**, history tracking, or reversible UI interactions.

This implementation adapts the traditional OOP-based Memento to a **functional, React-friendly approach**.

---

# Purpose

The Memento pattern solves one problem:

> **How do we save and restore previous states without letting other parts of the code modify internal details?**

In React applications, state changes are common. Users type in forms, draw on canvas, toggle UI components, or update dynamic data. The Memento pattern gives you a clean, reliable way to:

- Implement **undo/redo**
- Revert UI to a previous stable snapshot
- Store multiple historical versions of a component's state
- Restore a previous configuration without exposing internal logic

---

# How It Maps to React

React components already manage state, but React **does not provide built-in undo/redo**.

With the Memento pattern:

- **Originator** → your component or hook that owns the state
- **Memento** → a snapshot (a plain object, JSON, or DataURL)
- **Caretaker** → a small utility that stores snapshots and restores them

In this repository:

- The caretaker is implemented as `createMemento()`
- React components act as originators
- Each snapshot is stored as an immutable copy

---

# Included Examples

This pattern includes **two real-world examples**.

## 1. State-Based Undo/Redo (Forms, Objects, UI Data)

A reusable hook-like utility:

```ts
const formHistory = createMemento<FormState>();
```

- Save every state change
- Undo or redo any number of steps
- No classes, fully functional

## 2. Canvas Undo/Redo (Pixel-level image history)

Canvas works with **pixels**, not shapes. The Memento in this example stores full **DataURL snapshots** of the canvas.

This allows:

- Complete history restoration
- Restoring any previous visual frame
- Reliable undo/redo like drawing applications

---

# Pattern Structure

```
Originator → Provides state & requests save
Memento    → Immutable snapshot (object, JSON, image)
Caretaker  → Stores snapshots, manages undo/redo
```

In functional React:

- We do not expose classes
- Internal state is not accessible from outside
- Everything is based on clean, immutable snapshots

---

# How Undo/Redo Works

Each save operation pushes a **new snapshot** into a history list.

Undo:

- Moves the index backward
- Returns the previous snapshot

Redo:

- Moves the index forward
- Returns the next snapshot

Clear separation between:

- **State owner** (component)
- **State history manager** (memento caretaker)

---

# Simplicity and Safety

The design here intentionally avoids:

- Classes
- Complex inheritance
- Mutating shared state

Everything is:

- Pure
- Immutable
- React-friendly

This makes the Memento pattern easier to integrate in modern frontend applications.

---

# When Should You Use It?

Use the Memento pattern when you need:

### ✔ Undo/Redo functionality

- Drawing applications
- Form editing
- Text editors
- Graphic tools

### ✔ State versioning

- Multi-step wizards
- Draft saving
- Prefab configuration

### ✔ Revertible UI

- Design tools
- Visual editors

---

# When **Not** To Use It

Avoid it when:

- State is extremely large (snapshots become slow)
- You need partial undo instead of full snapshot replacement
- You need object-level diffing or patching

For those cases, consider:

- Observer pattern
- Command pattern
- Immutable state libraries

---

# Summary

The Memento pattern provides a clean separation between:

- State owners (React components)
- State history

This makes implementing undo/redo predictable and scalable.

The two examples in this project demonstrate:

- **High-level state history** (via `createMemento()`)
- **Low-level rendering history** (canvas snapshots)

Both mirror the original GoF intention, adapted for real-world React development.# Memento Pattern (React + TypeScript)

## Overview

The **Memento Pattern** is a behavioral design pattern used to capture and restore an object’s state without exposing its internal details. It allows you to implement _undo/redo_, _snapshots_, or _state history_ while maintaining encapsulation.

In React, the Memento pattern maps naturally to state management. Instead of classes, we use custom hooks and functional components to implement caretaker/originator/memento logic.

---

## Why Use the Memento Pattern?

Use this pattern when you need:

- **Undo / Redo functionality**
- **Versioning of state** (snapshots)
- **Rollback** after an invalid operation
- **Non-invasive persistence** of component state

---

## Key Concepts

### **Originator**

The component or module whose state you want to save.

### **Memento**

The snapshot of state. In React, this is usually a **deep-cloned state object** or a **serialized value** (like a canvas image).

### **Caretaker**

The entity managing the stored snapshots. In React, this is typically a **custom hook** managing a stack of snapshots.

---

## How It Looks in React

In React, the pattern is implemented using:

- A **state value** (the actual data)
- A **Memento Manager Hook** (handles history)
- Functions to `save()`, `undo()`, and `redo()`

Example structure:

```tsx
const { save, undo, redo, canUndo, canRedo } = useMemento(state);
```

---

## Example Use Cases

### **1. Canvas Drawing Undo/Redo**

Saving image snapshots using `canvas.toDataURL()`.

### **2. Form State Snapshots**

Capturing versions of a form as the user edits.

### **3. Multi-step Workflow Editors**

Rolling back to previous steps without exposing internal structure.

---

## Advantages

- Maintains **encapsulation**
- Provides **clean, predictable state history**
- Avoids cluttering components with history logic
- Works perfectly with React hooks

---

## Limitations

- Memory usage grows with number/size of snapshots
- Requires careful **serialization** for complex states
- Redo stack must be cleared when a new snapshot is created

---

## File Location in This Repository

```
app/design_patterns/memento/example_one
app/design_patterns/memento/example_two
```

Each example contains a **`.tsx` component** that you can simply import and render inside your `app.tsx`.

Example:

```tsx
import ExampleOne from "./design_patterns/memento/example_one";

export default function App() {
 return <ExampleOne />;
}
```

---

## Summary

The Memento pattern provides a clean, structured approach to implementing state snapshots in React. Using hooks, we can create powerful undo/redo systems while keeping the component logic clean and focused.

If you want, I can also generate a dedicated README template for every _other_ design pattern you add to the repository.
