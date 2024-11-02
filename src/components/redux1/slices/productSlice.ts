import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type ProductState = {
    name:string;
    price:number;
}

type SetProductActionPayload = {
    name:string;
    price:number;
}


export const initialState:ProductState = {
    name:'',
    price:0
}

export const productSlice = createSlice({
name: 'product',
initialState,
reducers: {
    setName:(state, action: PayloadAction<string>) => {
        state.name = action.payload
    },
    setPrice:(state, action: PayloadAction<number>) => {
        state.price = action.payload
    },
    setProduct: (_,action:PayloadAction<SetProductActionPayload>) => {
       return action.payload
    }
}   
})


export const {setName, setPrice, setProduct} = productSlice.actions

export const productReducer = productSlice.reducer

