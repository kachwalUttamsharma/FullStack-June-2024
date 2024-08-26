import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchList" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
