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
    const storedCart = getStoredCart()
    const savedCart = []
    for(const id in storedCart)
    {
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct)
      {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct )
      }
    }
    setCart(savedCart)
  }, [products])

  useEffect(()=>{

    console.log("Local Storage first line", products)

    const savedCart = [];
    const storedCart = getStoredCart()
    // console.log(storedCart)
    for(const id in storedCart)
    {
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct)
      {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
        // console.log(addedProduct)
      }
    }
    setCart(savedCart)
    console.log("local storage finished")
  } ,[products])
  const handleAddToCart = (selectedProduct) => {

    let newCart = []
    // console.log(selectedProduct)
    const exists = cart.find(product => product.id === selectedProduct.id)

    if(!exists)
    {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    }
    else
    {
      const rest = cart.filter(product => product.id !== selectedProduct.id) 
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }
    // const newCart = [...cart, selectedProduct]
    setCart(newCart)
    addToDb(selectedProduct.id)

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
