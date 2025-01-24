import React, { createContext, useState } from 'react'

const cartContext = createContext();

export default function Context() {

    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishListItems] = useState([]);

    const addTocart = () => {

    }

    var data = { cartItems, setCartItems, wishlistItems, setWishListItems, addTocart };


  return (
    <cartContext.Provider value={data}>

    </cartContext.Provider>
  )
}

export { cartContext };
