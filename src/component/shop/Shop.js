import React, { useState, useEffect } from 'react'
import "./Shop.css"

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect( ()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data => setProducts(data)) 
  } , [])
  return (
    <div className="shop-container">
      <div className="products-container">
        <h1>This is for products {products.length} </h1>
      </div>
      <div className="cart-container">
        <h1>Order Summary</h1> 
      </div>
    </div>
  )
}

export default Shop
