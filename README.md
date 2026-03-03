# React Accordion FAQ Component

A React accordion FAQ component that demonstrates core React concepts including **useState**, **lifted state**, and **child-to-parent communication** via callback props.

## 🚀 Features

- Toggle individual FAQ items open and closed
- Only one item can be open at a time
- Clean and minimal UI

## 🧠 React Concepts Applied

- **useState Hook** — managing open/close state
- **Lifting State Up** — state lives in the parent `Accordion` component so all children share the same source of truth
- **Child-to-Parent Communication** — child components call a handler function passed down as a prop to update the parent's state
- **Conditional Rendering** — answer content only renders when the item is open

## 🛠️ Tech Stack

- React
- useState Hook
