import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props;
  return (
    <div className="cart">
        <h1>Order Summary</h1>
        <p> Selected Item {cart.length} </p>
        <p>Total Price: </p> 
        <p>Total Shipping: </p>
        <p>Tax: </p>
        <p>Grand Total: </p>
    </div>
  );
};

export default Cart;