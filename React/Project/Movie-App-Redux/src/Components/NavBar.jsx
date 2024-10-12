import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MovieLogo.png";

const NavBar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/">
        <img className="w-[50px]" src={Logo} />
      </Link>
      <Link to="/" className="text-3xl font-bold text-blue-500">
        Movies
      </Link>
      <Link to="/watchList" className="text-3xl font-bold text-blue-500">
        WatchList
      </Link>
    </div>
  );
};

export default NavBar;
