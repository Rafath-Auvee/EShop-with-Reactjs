import React from "react";
import { Link } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import ReviewItem from "../ReviewItem/ReviewItem";

import useProducts from "./../hooks/useProducts";

import "./Order.css"

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = product => {
    // console.log(product)
    const rest = cart.filter(pd => pd.id !== product.id)
    setCart(rest)
    removeFromDb(product.id)
  }

  return (
    <div>
      <div className="shop-container">
        <div className="review-main-container">
          {cart.map((product) => (
            <ReviewItem key={product.id} 
            product={product}
            handleRemoveProduct={handleRemoveProduct}
            />
            
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} > 
            <Link to="/inventory">
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
