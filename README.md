#REACT

react-dom  // websites <br>

react-native // mobile app and web

// react interview questions

# 📘 JavaScript & React Interview Preparation Guide

This repository contains important **JavaScript and React concepts**, commonly asked in interviews, along with examples and explanations.

---

## 🔹 1. Remove Duplicates from an Array

### ✅ Code:
```javascript
const arr = [1, 2, 3, 4, 5];

const removeDuplicates = (array) => {
  return [...new Set(array)];
}

console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
💡 Explanation:
Set automatically removes duplicate values.
Spread operator converts Set back into an array.
🔹 2. Deep Clone an Object
✅ Code:
const Deepclone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const cloned = Deepclone(original);
💡 Explanation:
Converts object → string → object
Creates a deep copy (no reference sharing)
🔹 3. Difference Between null and undefined
💡 Explanation:
null
Represents intentional absence of value
It is an object type
undefined
Variable declared but not assigned
Default return value of functions
✅ Example:
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null
🔹 4. Event Bubbling vs Capturing
🔁 Event Bubbling:
Default behavior
Event flows from child → parent
🔁 Event Capturing:
Opposite of bubbling
Event flows from parent → child
🔹 5. React App Optimization Techniques
Use React.memo to prevent unnecessary re-renders
Use useCallback and useMemo
Implement code splitting (React.lazy, Suspense)
Optimize images and assets
Use Redux or Context API for global state
Avoid inline functions in JSX
🔹 6. What are Hooks in React?
💡 Definition:

Hooks allow you to use state and lifecycle methods in functional components

📌 Why Used:
Cleaner and reusable code
Avoid class components
Functional programming approach
🔹 7. useEffect vs useLayoutEffect
🟢 useEffect:
Runs after render
Used for API calls, side effects
Non-blocking
🔴 useLayoutEffect:
Runs before browser paint
Used for DOM measurements
Can block UI rendering
🔹 8. State Management in Large Scale React Apps
✅ Approach:
Local State
useState
Component-specific
Global State
Redux / Context API
Shared across components
🔹 9. Prevent Re-rendering in Child Components
✅ Code:
const ChildComponent = React.memo(({ value }) => {
  console.log('Child component rendered');
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
💡 Explanation:
React.memo prevents unnecessary re-renders
Only re-renders when props change
🔹 10. What is Redux?
💡 Definition:

Redux is a predictable state management library that:

Uses a central store
Uses actions and reducers
Ensures controlled state updates
🔹 11. CSS Positioning
Property	Description
relative	Moves relative to its normal position
sticky	Becomes fixed on scroll
fixed	Fixed to viewport
🔹 12. Handling API Calls in JavaScript
✅ Code:
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
