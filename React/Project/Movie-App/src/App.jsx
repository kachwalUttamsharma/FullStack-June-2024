import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import { Routes, Route } from "react-router-dom";
import MovieContextWrapper from "./MovieContextWrapper";

function App() {
  return (
    <>
      <MovieContextWrapper>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </MovieContextWrapper>
    </>
  );
}

export default App;
