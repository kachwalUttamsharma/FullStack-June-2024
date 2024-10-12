import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./Component/List";
import ToDoList from "./Component/ToDoList";
import ToDoListReducer from "./Component/ToDoListReducer";

function App() {
  return (
    <>
      {/* <List /> */}
      {/* <ToDoList /> */}
      <ToDoListReducer />
    </>
  );
}

export default App;
