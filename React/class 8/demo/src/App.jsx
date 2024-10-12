import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Component/Counter";
import CounterRedux from "./Component/CounterRedux";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <>
      <div>
        <div>Without Redux</div>
        <Counter />
      </div>
      <div>
        <div>With Redux</div>
        <CounterRedux />
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
