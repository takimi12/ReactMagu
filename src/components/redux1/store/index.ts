import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slices/productSlice";
import { productsReducer } from "../slices/productsSlice";
import { ipReducer } from "../../redux2/IpSlice";

export const store = configureStore({
    // devTools: import.meta.env.DEV,
    reducer:{
        product: productReducer,
        products: productsReducer,
        ip: ipReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch