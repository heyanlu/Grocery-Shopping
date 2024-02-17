import React, { createContext, useEffect, useState } from "react";
import { allProducts } from "../data";

export const ProductContext = createContext(null); 

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0
  }
  return cart; 
}; 

export const ProductContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 
    
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [searchTriggered, setSearchTriggered] = useState(false);
  
  
    const handleFilter = (e) => {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = allProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchWord);
      });
  
      if (searchWord === "") {
        setFilteredProducts([]);
        setSearchTriggered(false);
      } else {
        setFilteredProducts(newFilter);
        setSearchTriggered(true);    
      }
    };
  
    const clearInput = () => {
      setFilteredProducts([]);
      setWordEntered("");
    };


    const getTotalCarAmount = () => {
        let totalAmount = 0;
        for (const product in cartItems) {
          if (cartItems[product] > 0) {
            let productInfo = allProducts.find((item) => item.id === Number(product));
            totalAmount += cartItems[product] * productInfo.price;
          }
        }
        return totalAmount.toFixed(2);
      };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }; 

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }; 

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }


    const contextValue = {
      filteredProducts,
      setFilteredProducts,
      wordEntered,
      setWordEntered,
      searchTriggered,
      setSearchTriggered,
      allProducts,
      handleFilter,
      clearInput,
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateCartItemCount, 
      getTotalCarAmount
    }; 
    
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};






