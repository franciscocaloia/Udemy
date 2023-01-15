import React from "react";
import CartItem from "./CartItem";
const CartList = ({ handleAddItem, handleRemoveItem, items }) => {
  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      handleAddItem={handleAddItem.bind(null, item)}
      handleRemoveItem={handleRemoveItem.bind(null, item.id)}
    />
  ));
  return <ul>{cartItems}</ul>;
};

export default CartList;
