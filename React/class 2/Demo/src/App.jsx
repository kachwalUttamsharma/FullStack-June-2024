import React from "react";
import FirstComponent from "./FirstComponent";
import "./App.css";
import DisplayData from "./DisplayData";
import Button from "./Button";
import Counter from "./Counter";

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const person = {
    name: "Alice",
    age: 25,
  };
  const isLoggedIn = true;

  return (
    <React.Fragment>
      <div>From App Component</div>
      {/* <div>From App Component</div>
      <FirstComponent Message="first" />
      <FirstComponent Message="second" />
      <FirstComponent Message="third" />
      <FirstComponent Message="fourth" /> */}
      {/* true */}
      {/* <DisplayData fruits={fruits} person={person} isLoggedIn={isLoggedIn} /> */}
      {/* false */}
      <DisplayData fruits={fruits} isLoggedIn={isLoggedIn} />
      <Button />
      {/* <br /> */}
      <hr />
      <Counter />
    </React.Fragment>
  );
}

export default App;
