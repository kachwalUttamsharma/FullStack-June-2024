import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/Home">Home</a> */}
          <Link to="/Home"> Home Page</Link>
        </li>
        <li>
          {/* <a href="/About">About</a> */}
          <Link to="/About"> About Page</Link>
        </li>
        <li>
          {/* <a href="/Contact">Contact</a> */}
          <Link to="/Contact"> Contact Page</Link>
        </li>
        <li>
          {/* <a href="/Projects">Projects</a> */}
          <Link to="/Projects"> Projects Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
