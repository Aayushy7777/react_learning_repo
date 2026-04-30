# JavaScript & React Interview Notes

A curated collection of common JavaScript and React interview questions with concise explanations and code examples.

---

## Table of Contents

1. [JavaScript Utilities](#javascript-utilities)
   - [Remove Duplicates from an Array](#1-remove-duplicates-from-an-array)
   - [Deep Clone an Object](#2-deep-clone-an-object)
2. [JavaScript Concepts](#javascript-concepts)
   - [Difference Between `null` and `undefined`](#3-difference-between-null-and-undefined)
   - [Event Bubbling vs Event Capturing](#4-event-bubbling-vs-event-capturing)
   - [Handling API Calls in JavaScript](#5-handling-api-calls-in-javascript)
3. [React Concepts](#react-concepts)
   - [Optimizing a React App](#6-optimizing-a-react-app)
   - [What Are Hooks and Why Use Them?](#7-what-are-hooks-and-why-use-them)
   - [`useEffect` vs `useLayoutEffect`](#8-useeffect-vs-uselayouteffect)
   - [State Management in Large-Scale React Apps](#9-state-management-in-large-scale-react-apps)
   - [Preventing Re-renders in Child Components](#10-preventing-re-renders-in-child-components)
   - [What Is Redux?](#11-what-is-redux)
4. [CSS Concepts](#css-concepts)
   - [`relative`, `sticky`, and `fixed` Positioning](#12-relative-sticky-and-fixed-positioning)

---

## JavaScript Utilities

### 1. Remove Duplicates from an Array

Use a `Set` to keep only unique values, then spread it back into an array.

```js
const arr = [1, 2, 3, 4, 5];

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
```

---

### 2. Deep Clone an Object

A simple deep clone using `JSON.parse` and `JSON.stringify` (works for plain JSON-safe objects).

```js
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
```

> **Note:** This approach does not preserve functions, `undefined`, `Date` objects, `Map`/`Set`, or circular references. For those cases, use `structuredClone(obj)` or a library like Lodash's `_.cloneDeep`.

---

## JavaScript Concepts

### 3. Difference Between `null` and `undefined`

- **`null`** is an *assignment* value. It can be assigned to a variable to represent "no value." Its type is `object`.
- **`undefined`** is a *type* itself. It means a variable has been declared but not yet assigned a value. It's also the default return value of functions that don't explicitly return anything.

```js
let x;          // declared but not assigned
console.log(x); // undefined

let y = null;   // explicitly set to "no value"
console.log(y); // null
```

---

### 4. Event Bubbling vs Event Capturing

Both are phases of **event propagation** in the DOM.

- **Event Bubbling (default):** The event starts at the target element and propagates up to its parents.
  - Example: clicking a button inside a `div` triggers the button's handler first, then the `div`'s.
- **Event Capturing:** The opposite — the event starts at the root and travels down to the target.
  - Enable it by passing `{ capture: true }` to `addEventListener`.

```js
element.addEventListener("click", handler, { capture: true }); // capturing
element.addEventListener("click", handler);                    // bubbling
```

---

### 5. Handling API Calls in JavaScript

Use `async/await` with `try/catch` for clean, readable async code.

```js
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

---

## React Concepts

### 6. Optimizing a React App

1. Use **`React.memo`** to prevent unnecessary re-renders of functional components.
2. Use **`useCallback`** and **`useMemo`** to memoize functions and values.
3. Implement **code-splitting** with `React.lazy` and `Suspense` to load components on demand.
4. **Optimize assets** — compress images and use modern formats (WebP, AVIF).
5. Use a **state management library** (Redux, Zustand, Context API) to manage global state efficiently.
6. Avoid **inline functions and object literals** in JSX, which can cause unnecessary re-renders.

---

### 7. What Are Hooks and Why Use Them?

**Hooks** are functions that let you use state and other React features in functional components. Introduced in **React 16.8**, they remove the need for class components.

**Why use them?**
- Cleaner, more concise code.
- Better reusability via custom hooks.
- A more functional programming style.
- Easier to manage state, side effects, and lifecycle behavior.

---

### 8. `useEffect` vs `useLayoutEffect`

| Hook | When It Runs | Use Case |
|------|--------------|----------|
| `useEffect` | **After** the component renders and the browser paints. Non-blocking. | Data fetching, subscriptions, logging. |
| `useLayoutEffect` | **Synchronously** after DOM mutations but **before** the browser paints. Blocking. | Measuring layout, synchronously updating the DOM to avoid visual flicker. |

> Prefer `useEffect` by default. Reach for `useLayoutEffect` only when you need to read or mutate the DOM before the user sees it.

---

### 9. State Management in Large-Scale React Apps

Use a combination of **local** and **global** state:

- **Local state (`useState`)** — for state specific to a single component. Encourages encapsulation.
- **Global state (Redux, Zustand, Context API)** — for state shared across many components (auth, theme, cart, etc.).

Additional tips:
- Use **server-state libraries** like **React Query** or **SWR** for API data — they handle caching, refetching, and synchronization out of the box.
- Keep global state minimal; not everything needs to be global.

---

### 10. Preventing Re-renders in Child Components

Use **`React.memo`**, a higher-order component that re-renders the wrapped component **only when its props change**.

```jsx
const ChildComponent = React.memo(({ value }) => {
  console.log("Child component rendered");
  return <div>{value}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent value={count} />
    </div>
  );
};
```

The `ChildComponent` re-renders only when `value` actually changes, not on every parent update.

---

### 11. What Is Redux?

**Redux** is a predictable state management library for JavaScript applications (commonly used with React). It provides:

- A **centralized store** for all application state.
- **Actions** that describe what happened.
- **Reducers** (pure functions) that decide how state changes.
- A strict, predictable update flow that makes debugging easier.

> Today, **Redux Toolkit (RTK)** is the recommended way to use Redux — it removes boilerplate and includes RTK Query for data fetching.

---

## CSS Concepts

### 12. `relative`, `sticky`, and `fixed` Positioning

| Position | Behavior |
|----------|----------|
| `relative` | Positioned relative to its normal location. Adjustable via `top`/`right`/`bottom`/`left`. **Still occupies space** in the layout. |
| `sticky` | Behaves like `relative` until the user scrolls past a defined threshold, then it becomes fixed within its containing block. |
| `fixed` | Positioned relative to the **viewport**. Stays in place during scroll and **does not occupy space** in the layout. |

---

## License

These notes are for personal study and interview preparation. Feel free to fork, expand, and share.


