import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Partner from "./pages/Partner";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
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
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
