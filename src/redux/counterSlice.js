import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0, skipCount: 0},
  reducers: {
    increment: state => {
      state.value = state.value + 3;
    },
    decrement: state => {
      state.value = state.value - 2;
    },
    reset: state => {
      state.value = 0;
    },
    handelSkipCount: (state, action) => {
      state.skipCount = action.payload;
    },
  },
});
export const {increment, decrement, handelSkipCount, reset} =
  counterSlice.actions;
export default counterSlice.reducer;
