import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props;
  let total = 0
  let shipping = 0
  for(const product of cart)
  {
    total = total + product.price
    shipping = shipping + product.shipping
  }

  const tax = (total * 0.1).toFixed(2);

  console.log(cart)
  return (
    <div className="cart">
        <h1>Order Summary</h1>
        <p> Selected Item: {cart.length} </p>
        <p>Total Price: ${total}</p> 
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: {tax}</p>
        <p>Grand Total: </p>
    </div>
  );
};

export default Cart;