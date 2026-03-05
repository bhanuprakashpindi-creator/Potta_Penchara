import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../StoreSlices/CartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
