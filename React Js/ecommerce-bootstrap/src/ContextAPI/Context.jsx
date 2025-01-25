import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const cartContext = createContext();

export default function Context({children}) {

    var getCartItems = JSON.parse(localStorage.getItem('cartItems'));

    const [cartItems, setCartItems] = useState((getCartItems) ? getCartItems : []);
    const [wishlistItems, setWishListItems] = useState([]);

    // const addToCart = () => {
    //   toast.success('Add to cart successfully !!');
    // }

    var data = { cartItems, setCartItems, wishlistItems, setWishListItems };


  return (
    <cartContext.Provider value={data}>
      {children}
    </cartContext.Provider>
  )
}

export { cartContext };
