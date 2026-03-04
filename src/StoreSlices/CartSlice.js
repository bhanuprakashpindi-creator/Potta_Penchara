import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //Mutating the state(modifing state directly)
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0; //[]
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});
export default CartSlice.reducer;
export const { addItems, clearCart, removeItem } = CartSlice.actions;
