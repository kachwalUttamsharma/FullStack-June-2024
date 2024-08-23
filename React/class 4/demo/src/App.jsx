import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Users from "./Components/Users";

const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Projects = React.lazy(() => import("./Components/Projects"));

function App() {
  return (
    <>
      {/* <Home />
      <About />
      <Contact />
      <Projects /> */}
      <NavBar />
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route
            path="/users/:id"
            element={<Users isAdmin={true}></Users>}
          ></Route>
          <Route
            path="/random"
            element={<Navigate to="/Home"></Navigate>}
          ></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
