# 📘 React `useEffect` Hook – A Beginner’s Mastery Guide

---

## 🔍 1. What is `useEffect`?

### Simple Definition:
`useEffect` is a built-in React hook that lets you run code **after** your component renders (or re-renders). Think of it as telling React, “After you’ve shown this component on the screen, do this.”

---

## 🧠 Real-Life Analogy

### Light Bulb Analogy:
Imagine your component is a **room**. Whenever someone enters (the component renders), you want to **turn on the lights** or **start a fan**. The `useEffect` hook is like an **automatic switch** that runs these side tasks each time someone enters the room or changes something inside it.

---

## 🔧 2. Syntax of `useEffect`

```javascript
useEffect(() => {
  // Your side-effect logic here
}, [dependencies]);
