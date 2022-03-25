import React, { useState, useEffect } from 'react'
import "./Shop.css"
import Product from "./../Product/Product";
import Cart from "./../Cart/Cart";
import {addToDb,getStoredCart} from '../../utilities/fakedb.js'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect( ()=>{
    console.log("Products load before fetch")
    
    fetch('products.json')
    .then(res=>res.json())
    .then(data => {
      setProducts(data);
      console.log("products loaded")
    }) 
  } , [])

  useEffect(()=>{

    console.log("Local Storage first line", products)
    const storedCart = getStoredCart()
    // console.log(storedCart)
    for(const id in storedCart)
    {
      const addedProduct = products.find(product => product.id == id)
      if(addedProduct)
      {
        console.log(addedProduct)

      }
    }
    console.log("local storage finished")
  } ,[products])
  const handleAddToCart = (product) => {
    // console.log(product)

    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.id)

  }
  return (
    <div className="shop-container">
      <div className="products-container">

        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
