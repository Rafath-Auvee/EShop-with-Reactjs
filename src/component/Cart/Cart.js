import React from 'react';
import './Cart.css'
const Cart = (props) => {
  return (
    <div className="cart">
        <h1>Order Summary</h1>
        <p> Total Item {props.cart.length} </p> 
    </div>
  );
};

export default Cart;