import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../Store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const { remove } = cartSlice.actions;
  const dispatch = useDispatch();

  const removeProductHandler = (product) => {
    dispatch(remove(product));
  };

  return (
    <div>
      <div className="cartWrapper">
        {items?.length > 0 &&
          items?.map((item, index) => {
            return (
              <div className="cartCard" key={index}>
                <img src={item?.image} />
                <h5>{item?.title}</h5>
                <h6>Price: {item?.price}</h6>
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeProductHandler(item);
                  }}
                >
                  Remove Item
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
