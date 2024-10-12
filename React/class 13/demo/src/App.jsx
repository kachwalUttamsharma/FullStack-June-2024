import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./Components/HelloWorld";
import Counter from "./Components/Counter";
// import TodoList from "./Components/ToDoList";
import ToDoList from "./Components/ToDoList";
import WithLoading from "./Components/HOC/WithLoading";
import DataComponent from "./Components/HOC/DataComponent";
import MyComponent from "./Components/useLoading";

function App() {
  const [count, setCount] = useState(0);

  const EnhancedComponent = WithLoading(DataComponent);

  return (
    <>
      <HelloWorld name={"vishnu"} />
      <Counter />
      <ToDoList />
      <EnhancedComponent data="enhancedComponent 2 Data" />
      <MyComponent />
    </>
  );
}

export default App;
