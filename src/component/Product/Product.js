import React from 'react';

const Product = (props) => {
  const {name, seller, ratings, price, img} = props.product
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
};

export default Product;