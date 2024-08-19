import { createSlice } from "@reduxjs/toolkit";


const skipSlice = createSlice({
  name: 'skip',
  initialState: 0,
  reducers: {
    increaseSkip: (state) => {
      return state + 10
    },
    decreaseSkip: (state) => {
      return state - 10
    },
  }
})
export const skipActions = skipSlice.actions;

export default skipSlice;