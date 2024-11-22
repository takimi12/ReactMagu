// src/redux/slices/orderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: number;
  title: string;
  paid: boolean; // Dodajemy status płatności
  quantity:number;
}

interface OrderState {
  selectedOrders: Order[];
}

const initialState: OrderState = {
  selectedOrders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
        const existingOrder = state.selectedOrders.find(order => order.id === action.payload.id);
        if (existingOrder) {
          existingOrder.quantity += 1; // Increment quantity if order exists
        } else {
          state.selectedOrders.push({ ...action.payload, quantity: 1 });
        }
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.selectedOrders = state.selectedOrders.filter(order => order.id !== action.payload);
    },
    updateOrderTitle: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const order = state.selectedOrders.find(order => order.id === action.payload.id);
      if (order) {
        order.title = action.payload.title;
      }
    },
    togglePaymentStatus: (state, action: PayloadAction<number>) => {
      const order = state.selectedOrders.find(order => order.id === action.payload);
      if (order) {
        order.paid = !order.paid;
      }
    },
  },
});

export const { addOrder, removeOrder, updateOrderTitle, togglePaymentStatus } = orderSlice.actions;
export default orderSlice.reducer;
