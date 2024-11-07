// src/redux/slices/moneySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoneyState {
  value: number;
}

const initialState: MoneyState = {
  value: 120,
};

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setMoney: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    addMoney: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    subtractMoney: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { setMoney, addMoney, subtractMoney } = moneySlice.actions;
export default moneySlice.reducer;
