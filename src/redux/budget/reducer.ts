import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    currentBalance: 0
  },
  reducers: {
    increment: (state, action) => {
      state.currentBalance += action.payload;
    }
  },
});

export const { increment } = budgetSlice.actions;
export default budgetSlice.reducer;