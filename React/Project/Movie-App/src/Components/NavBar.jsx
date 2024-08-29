import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MovieLogo.png";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 nav-bg w-full">
      <div className="flex drop-shadow text-white space-x-8 items-center pl-3 py-4">
        <Link to="/">
          <img className="w-[50px]" src={Logo} />
        </Link>
        <Link to="/" className="text-3xl font-bold">
          Movies
        </Link>
        <Link to="/watchList" className="text-3xl font-bold">
          WatchList
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
