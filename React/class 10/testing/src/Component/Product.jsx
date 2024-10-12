// Product.js
import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      {error.length > 0 ? (
        <div>{error}</div>
      ) : (
        <div className="productsWrapper">
          {products?.length > 0 ? (
            products.map((product, id) => (
              <div key={product?.id || id} className="card">
                <img src={product?.image} alt={product?.title} />
                <h6>{product?.title}</h6>
                <h5>${product?.price}</h5>
                <button className="btn">Add to Card</button>
              </div>
            ))
          ) : (
            <div>Products</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
