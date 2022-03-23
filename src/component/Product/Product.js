import React from 'react';
import "./Product.css"
const Product = (props) => {
  const {name, seller, ratings, price, img} = props.product
  return (
    <div className="product">
      <img src={img} alt={name} />
    </div>
  );
};

export default Product;