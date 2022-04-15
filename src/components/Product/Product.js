import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  const {name, seller, ratings, price, img} = props.product

  // const {handleAddToCart} = props

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p> Price: ${price} </p>
        <p> <small>Manufacturer: {seller}</small> </p>
        <p> <small>Rating: {ratings} stars</small> </p>
      </div>
      <button className="btn-cart" onClick={() => props.handleAddToCart(props.product)}>
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;