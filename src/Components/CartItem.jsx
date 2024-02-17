import React, { useContext } from 'react';
import { ProductContext } from '../Context/productContext';
import "../Styles/CartItem.css";


const CartItem = ({ item }) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ProductContext); 

    return (
      <div className="cartItem">
        <img src={item.img} />
        <div className="item-info">
          <b>{item.title}</b>
          <p>${item.price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(item.id)}> - </button>
            <input value={cartItems[item.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)}></input>
            <button onClick={() => addToCart(item.id)}> + </button>
          </div>
        </div>
      </div>
    );
  };

export default CartItem
