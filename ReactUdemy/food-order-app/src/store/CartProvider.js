import CartContext from "./cart-context";
import React, { useEffect, useReducer } from "react";
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      console.log("hola");
      let updated = false;
      const updatedItems = state.items.map((item) => {
        if (item.id === action.item.id) {
          updated = true;
          return { ...item, amount: item.amount + action.item.amount };
        } else {
          return item;
        }
      });
      return {
        items: updated ? updatedItems : [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.amount * action.item.price,
      };
    }
    case "REMOVE": {
      const updatedItem = state.items.find((item) => item.id === action.id);
      return {
        items:
          updatedItem.amount === 1
            ? state.items.filter((item) => item.id !== updatedItem.id)
            : state.items.map((item) =>
                item.id === updatedItem.id
                  ? { ...item, amount: updatedItem.amount - 1 }
                  : item
              ),
        totalAmount: state.totalAmount - updatedItem.price,
      };
    }
    default:
      return state;
  }
}
const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  useEffect(() => {
    console.log(cart.items);

    return () => {};
  }, [cart]);

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
