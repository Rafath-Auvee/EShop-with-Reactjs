import React, { useState, useEffect } from 'react'
import "./Shop.css"
import Product from "./../Product/Product";

const Shop = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect( ()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data => setProducts(data)) 
  } , [])

  const handleAddToCart = (product) => {
    console.log(product)

    const newCart = [...cart, product]
    setCart.push(newCart)

  }
  return (
    <div className="shop-container">
      <div className="products-container">

        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <h1>Order Summary</h1>
        <p> {setCart.length()} </p> 
      </div>
    </div>
  )
}

export default Shop
