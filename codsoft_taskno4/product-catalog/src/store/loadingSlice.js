import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    fetchingProducts: (state) => {
      return true; // Set state to true
    },
    fetchingDone: (state) => {

      return false; // Set state to false
    }
  }
})

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
