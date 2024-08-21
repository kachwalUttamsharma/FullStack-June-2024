import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("before useeffect");

  // 1. executing mounting phase
  // 2. update phase (validated in update using dependency array)
  useEffect(() => {
    console.log("no dependency array is provided");
    const token = setInterval(() => {
      console.log("some data");
    }, 2000);
    // will execute when component unmount
    // before re-running the effect
    return () => {
      // clean up function
      console.log("clean up function called");
      clearInterval(token);
    };
  }, [count]);

  console.log("after useeffect");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me To Increase</button>
      <button onClick={() => setCount(count - 1)}>Click me To Decrease</button>
    </div>
  );
};

export default Counter;
