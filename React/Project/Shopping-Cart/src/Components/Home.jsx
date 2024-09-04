import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { STATUSES, fetchProducts } from "../Store/productSlice";
import cartSlice from "../Store/cartSlice";
import useFetchData from "../hook/useFetchData";

const Home = () => {
  //   const [data, setData] = useState([]);
  //   const [loader, setLoader] = useState(false);
  //   const [error, setError] = useState("");

  //   const { data, status } = useSelector((state) => state.products);
  //   const { setStatus, setProducts } = productSlice.actions;

  const { data, status } = useFetchData(fetchProducts, "products");
  console.log("from home comp");
  const { add } = cartSlice.actions;
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     try {
  //       dispatch(setStatus(STATUSES.LOADING));
  //       //   setLoader(true);
  //       async function getData() {
  //         const res = await axios.get("https://fakestoreapi.com/products");
  //         // setData(res?.data);
  //         dispatch(setStatus(STATUSES.SUCCESS));
  //         dispatch(setProducts(res?.data));
  //       }
  //       getData();
  //     } catch (error) {
  //       //   setError(error);
  //       dispatch(setStatus(STATUSES.ERROR));
  //     }
  //   }, []);

  //   useEffect(() => {
  //     dispatch(fetchProducts());
  //   }, []);

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      {status === STATUSES.LOADING && (
        <div>
          <h2>Loading Data</h2>
        </div>
      )}
      {status === STATUSES.ERROR ? (
        <div>
          <h2>Something Went Wrong</h2>
        </div>
      ) : (
        <div className="productsWrapper">
          {data?.length > 0 &&
            data.map((product, idx) => {
              return (
                <div key={idx} className="card">
                  <img src={product?.image} alt="Product Image" />
                  <h6>{product?.title}</h6>
                  <h5>{product?.price}</h5>
                  <button
                    className="btn"
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
