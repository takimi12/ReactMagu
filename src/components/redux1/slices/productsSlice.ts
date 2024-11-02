import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductState = {
    list:string[];
    count:number;
}


const initialState: ProductState = {
    list: [],
    count: 0,
}



export const prodcutSlice = createSlice({
name: 'products',
initialState,
reducers: {
    addProduct: (state,action:PayloadAction<string>) => {
        state.list.push(action.payload)
        state.count++
    }
}
})

export const {addProduct} = prodcutSlice.actions
export const productsReducer = prodcutSlice.reducer