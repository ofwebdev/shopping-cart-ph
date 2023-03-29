import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/Product";

function Shop() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // We just provide this function in props
  // how awesome is it
  // use should grape this function in your component props
  const handelAddToCard = (product) => {
    console.log(product);
  };

  return (
    <div className="container">
      <div className="product-row">
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelAddToCard={handelAddToCard}
            ></Product>
          ))}
        </div>
        <div className="card-details">
          <h4>Order history</h4>
          <p>Selected Item : </p>
          <p>Total Price : $</p>
          <p>Total shipping charge: $</p>
          <p>Tax : </p>
          <h3>Grand Total : </h3>

          <button>Clear card</button>
          <button>Review Order</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
