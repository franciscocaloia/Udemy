import { createSlice } from "@reduxjs/toolkit";
const initialCountState = {
  counter: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCountState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
