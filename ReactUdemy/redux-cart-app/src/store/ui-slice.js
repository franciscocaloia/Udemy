import { createSlice } from "@reduxjs/toolkit";
const initialUIState = {
  showCart: false,
  notification: null,
};

export const UISlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        showNotification: true,
        status: action.payload.status,
        title: action.payload.content,
        message: action.payload.message,
      };
    },
  },
});
export const UIActions = UISlice.actions;
