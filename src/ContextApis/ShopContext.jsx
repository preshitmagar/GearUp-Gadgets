import React, { createContext } from 'react';
import { useState } from 'react';
import all_product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log('is removed')
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
    
export default ShopContextProvider;