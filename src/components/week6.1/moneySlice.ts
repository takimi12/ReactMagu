// src/redux/slices/moneySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface MoneyState {
  value: number;
}

// Initial state
const initialState: MoneyState = {
  value: 120,
};

// Create the slice with custom action types
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

// Export the actions and the reducer
export const { setMoney, addMoney, subtractMoney } = moneySlice.actions;
export const moneyReducer = moneySlice.reducer;
