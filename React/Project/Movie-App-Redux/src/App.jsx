import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
