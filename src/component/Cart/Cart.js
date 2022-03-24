import React from 'react';

const Cart = (props) => {
  return (
    <div>
        <h1>Order Summary</h1>
        <p> Total Item {props.cart.length} </p> 
    </div>
  );
};

export default Cart;