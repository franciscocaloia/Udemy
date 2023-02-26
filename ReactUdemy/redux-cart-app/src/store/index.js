import { createSlice, configureStore } from "@reduxjs/toolkit";
import { UISlice } from "./ui-slice";
const initialCartState = {
  items: [],
  totalAmount: 0,
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const foundItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem) {
        foundItem.quantity++;
        foundItem.total += foundItem.price;
      } else {
        state.items.push({
          ...action.payload,
          total: action.payload.price,
          quantity: 1,
        });
      }
      state.changed = true;
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity--;
        state.items[index].total -= state.items[index].price;
      }
      state.changed = true;
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: UISlice.reducer },
});
export const cartActions = cartSlice.actions;
export function fetchCartData() {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://food-order-app-7a792-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch(cartActions.replaceCart(data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function sendCartData(cart) {
  return async (dispatch) => {
    await fetch(
      "https://food-order-app-7a792-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items,
          totalAmount: cart.totalAmount,
        }),
      }
    );
  };
}

export default store;
