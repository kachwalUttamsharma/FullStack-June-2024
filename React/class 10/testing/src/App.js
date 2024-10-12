import logo from "./logo.svg";
import "./App.css";
import Counter from "./Component/Counter";
import Login from "./Component/Login";
import Product from "./Component/Product";

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Learn React</h1>
      <Login />
      <Product />
    </div>
  );
}

export default App;
