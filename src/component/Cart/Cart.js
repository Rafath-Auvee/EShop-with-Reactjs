import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props;
  let total = 0

  for(const product of cart)
  {
    total = total + product.price
  }

  console.log(cart)
  return (
    <div className="cart">
        <h1>Order Summary</h1>
        <p> Selected Item {cart.length} </p>
        <p>Total Price: ${total}</p> 
        <p>Total Shipping: </p>
        <p>Tax: </p>
        <p>Grand Total: </p>
    </div>
  );
};

export default Cart;