# usePrev Hook

A simple custom React hook that returns the **previous value** of a state or prop on the next render.

## ✨ Features
- Tracks previous value across renders
- Works with state and props
- Easy to plug into any component

---

## 🚀 Usage

```jsx
const prevCount = usePrev(count);

console.log("Previous:", prevCount, "Current:", count);


---

## 📦 Example

```jsx
import { useState } from "react";
import { usePrev } from "./usePrev";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <div>
      <p>Previous: {prevCount}</p>
      <p>Current: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}



