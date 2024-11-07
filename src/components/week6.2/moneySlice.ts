// src/redux/slices/moneySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoneyState {
  value: number;
}

const initialState: MoneyState = {
  value: 0,
};

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
 
 
    deposit: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      if (state.value >= action.payload) {
        state.value -= action.payload;
      } else {
        console.warn('Niewystarczające środki');
      }
    },
  },
});

export const {  deposit, withdraw } = moneySlice.actions;
export default moneySlice.reducer;
