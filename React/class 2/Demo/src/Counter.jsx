import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const incrementHandler = () => {
    count += 1;
    setCount(count);
    console.log(count);
  };

  const decrementHandler = () => {
    count -= 1;
    setCount(count);
    console.log(count);
  };
  return (
    <>
      <div>Counter</div>
      <div>The count value is {count}</div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment_value
      </button>
      <hr />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement_value
      </button>
    </>
  );
};

export default Counter;
