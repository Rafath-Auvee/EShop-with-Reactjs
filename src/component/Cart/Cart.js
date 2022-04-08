import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props;
  let total = 0
  let shipping = 0
  let quantity = 0

  for(const product of cart)
  {
    quantity = quantity + product.quantity
    total = total + product.price
    shipping = shipping + product.shipping
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = 0
  grandTotal = grandTotal + tax + total
  // console.log(cart)
  return (
    <div className="cart">
        <h1>Order Summary</h1>
        <p> Selected Item: {quantity} </p>
        <p>Total Price: ${total}</p> 
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p>Grand Total: ${grandTotal} </p>
        {props.children}
    </div>
  );
};

export default Cart;