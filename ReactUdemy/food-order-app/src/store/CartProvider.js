import CartContext from "./cart-context";
import React,{useState} from 'react';
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item)=>{};
    const removeItem = (id)=>{};
    

    const cartContext = {
        items:cart.items,
        totalAmount:cart.totalAmount,
        addItem,removeItem
    };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider;