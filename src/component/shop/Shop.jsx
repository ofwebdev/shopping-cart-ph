import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/Product";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="product-row">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}

        <div className="card-details"></div>
      </div>
    </div>
  );
}

export default Shop;
