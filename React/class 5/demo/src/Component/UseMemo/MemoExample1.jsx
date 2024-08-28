import React, { useState, useMemo } from "react";

const MemoExample1 = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveComputation = (num) => {
    console.log("Computing...");
    // Simulate a CPU-intensive computation
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  };

  // Memoize the result of expensive computation
  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>Computed Value: {computedValue}</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default MemoExample1;
