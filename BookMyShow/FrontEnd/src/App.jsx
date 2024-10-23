import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Partner from "./pages/Partner";
import Admin from "./pages/Admin";
import { setupAxiosInterceptors } from "./api";
import { useEffect } from "react";
import SingleMovie from "./components/SingleMovie";
import BookShow from "./components/BookShow";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => {
    return state.loader;
  });
  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partner"
          element={
            <ProtectedRoute>
              <Partner />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <SingleMovie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-show/:id"
          element={
            <ProtectedRoute>
              <BookShow />
            </ProtectedRoute>
          }
        />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
