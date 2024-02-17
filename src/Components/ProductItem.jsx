import React, { useContext } from 'react'; 
import { ProductContext } from "../Context/productContext"
import "../Styles/ProductItem.css";



const ProductItem =({item}) =>{
  const { addToCart, cartItems } = useContext(ProductContext);
  const cartItemAmount = cartItems[item.id]

  return (
    <div className="product">
        <img src={item.img} />
        <div className="item-info">
          <b>{item.title}</b>
          <p>${item.price}</p>
        </div>
        <button className="addTOCart" onClick={() => addToCart(item.id)}>
            Add to Cart {cartItemAmount > 0 && <> ({ cartItemAmount})</>}
        </button>
    </div>
  )
}

export default ProductItem
