import React from "react";
import { useCallback, useState } from "react";

const Example2 = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default Example2;

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildCounterComponent increment={increment} />
    </div>
  );
};

const ChildCounterComponent = React.memo(({ increment }) => {
  console.log("ChildComponent rendered");

  return <button onClick={increment}>Increment</button>;
});
