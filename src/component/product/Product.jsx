import React from "react";

function Product(props) {
  const { img, name, seller, ratings, price } = props.product;
  return (
    <div className="product-view">
      <div>{name}</div>
      <img className="product-img-control" src={img} alt={`product`} />
    </div>
  );
}

export default Product;
