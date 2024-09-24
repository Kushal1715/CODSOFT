import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      console.log(action.payload)
      state.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      return state.filter((id) => id !== action.payload);
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
