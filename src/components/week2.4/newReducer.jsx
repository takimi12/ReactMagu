import React, { act, useReducer, useState } from 'react';


const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const REMOVE_ALL = 'REMOVE'



export function OwnCartReducer11() {
  
const cart = []
const products = [
    {
        id:0,
        name: "produkt1",
        description: "opis produktu1",
        price: 123,
        available: 4
    },
    {
        id:1,
        name: "produkt2",
        description: "opis produktu2",
        price: 234,
        available: 5
    },
]

const [state, dispatch] = useReducer(reducer, [])

function reducer(state, action) {

    switch(action.type){
        case ADD_TO_CART:
        // sprawdzenie unikalności produktu na podstawie id
        const uniqueProduct = state.find(el => el. id === action.payload.id)
        // jesli produktu nie ma w koszyku ustawienie jego ilości na 1
        if(!uniqueProduct){
         state =   [...state, {...action.payload, quantity:1 } ] 
         } 
         return state

         case INCREASE:
                return state.map(item =>
                  item.id === action.product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
        
        case DECREASE:

        const productInCartS = state.find(item => item.id === action.product.id); 

         if (productInCartS.quantity > 0) {
          return state.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          }
                      
        case REMOVE_FROM_CART:
                return state.filter(item => item.id !== action.id)
              
        case REMOVE_ALL:
        return [];
        default:
        return []
        
    }
}



const handleAddProduct = (el) => {
    dispatch({type:ADD_TO_CART,  payload:el });
    
}


const handleIncrease = (product) => {
    dispatch({type:INCREASE, product})
}

const clearAll = () => {
    dispatch({type:REMOVE_ALL})
  }

const decrease =(product) => {
    dispatch({type:DECREASE, product})
}
const handleRemove = (id) => {
    dispatch({ type: REMOVE_FROM_CART, id });
  };

return (
    <div>
        {products.map(el =>
            <div key={el.id}>
            <p>{el.name}</p>
            <p>{el.description}</p>
            <p>{el.price}</p>
             <button   disabled={state.find(cartItem => cartItem.id === el.id)}  onClick={() => handleAddProduct(el)}>Dodaj do koszyka</button>


            </div>
            )}

            <div>
            {state.length > 0  ? 
            <>
            {state.map(el=>
            <div key={el.id}>
                <div >
                <p>{el.name}</p>
                <p>{el.description}</p>
                 <p>{el.price}</p>
                 <p>{el.quantity}</p>
                 <button  onClick={() => decrease(el)}>Zmniej produkt o 1</button>
                 <button onClick={() => handleIncrease(el)}>Zwiększ o 1</button>   
                 <button onClick={() => handleRemove(el.id)}>Usuń element z koszyka</button>
                </div>
                               
                 <button onClick={() => clearAll()}>Wyczyść koszyk</button> 
                                                   </div>
                )}
                </>
                : null }
            


            </div>


    </div>
)
}

