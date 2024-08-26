import React from "react";
import { useCallback, useState } from "react";

const Example1 = () => {
  return (
    <div>
      <ParentComponent />
      <Counter />
    </div>
  );
};

export default Example1;

const ParentComponent = () => {
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  // cached function
  // same reference
  const removeItem = useCallback((itemNeedToBeRemoved) => {
    console.log("remove item being called");
    setItems((prevItems) =>
      prevItems.filter((item) => item != itemNeedToBeRemoved)
    );
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <ChildComponent key={item} item={item} removeItem={removeItem} />
        );
      })}
    </div>
  );
};

// caching component (when props are same it wont recall component)
// 2, () => component

const ChildComponent = React.memo(({ item, removeItem }) => {
  console.log("rendering child component: ", item);
  return (
    <div>
      {item} <button onClick={() => removeItem(item)}>Remove</button>
    </div>
  );
});

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
