// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import moneyReducer from './moneySlice';

const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

// Typy dla stanu głównego i dispatch, aby ułatwić typowanie w komponentach
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
