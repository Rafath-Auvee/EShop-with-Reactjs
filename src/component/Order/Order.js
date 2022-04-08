import React from 'react';

import useProducts from "./../hooks/useProducts";

const Order = () => {

  const [products, setProducts] = useProducts();
  return (
    <div>
      <h1>Product length {products.length}</h1>
    </div>
  );
};

export default Order;