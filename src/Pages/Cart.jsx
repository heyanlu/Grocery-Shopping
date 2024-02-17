import React, { useContext }from 'react'
import { allProducts } from '../data'; 
import { ProductContext } from '../Context/productContext';
import CartItem from "../Components/CartItem"; 
import "../Styles/CartContainer.css";
import { useNavigate } from "react-router-dom"; 
import EmptyCart from "../Asset/empty-cart.png";

const Cart =() => {
  const { cartItems, getTotalCarAmount } = useContext(ProductContext);
  const totalAmount = getTotalCarAmount(); 

  const navigate = useNavigate(); 

  return (
    <div className="cart">
      <div>
        <h1>Your Cart items</h1>
      </div>
      <div className="cartItems">
        {allProducts.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem item={item} key={item.id} />
          }
        })}
      </div>
      
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
       ) : (
        <div className="contianer">
          <img src={EmptyCart}/>
          <h2>Your Cart is Currently Empty</h2>
        </div>   
       )}
    </div>
  )
}

export default Cart
