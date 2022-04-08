import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import ReviewItem from "../ReviewItem/ReviewItem";

import useProducts from "./../hooks/useProducts";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <div>
      <div className="shop-container">
        <div className="review-main-container">
          {cart.map((product) => (
            <ReviewItem key={product.id} 
            product={product}/>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Order;
