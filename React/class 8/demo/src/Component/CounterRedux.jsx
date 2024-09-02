import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/counterSlice";

const { increment, decrement } = counterSlice.actions;
function CounterRedux() {
  // give access to initialState values of state through store
  const { count } = useSelector((store) => {
    // console.log("store", store);
    return store.counterState;
  });

  console.log(counterSlice);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={handleIncrement}> + </button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}> - </button>
    </>
  );
}

export default CounterRedux;
