import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import skipSlice from "./skipSlice";
import loadingSlice from "./loadingSlice";
import cartSlice from "./cart";

const productStore = configureStore({
  reducer: {
    products: productsSlice.reducer,
    skip: skipSlice.reducer,
    loading: loadingSlice.reducer,
    cart: cartSlice.reducer,
  }
})


export default productStore;