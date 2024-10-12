import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const noOfItems = useSelector((state) => state.cart.length);
  return (
    <div className="navbar">
      <h3>Shopping Cart (using Redux)</h3>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Item Count: {noOfItems}</span>
      </div>
    </div>
  );
};

export default NavBar;
