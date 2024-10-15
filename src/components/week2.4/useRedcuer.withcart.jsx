import React, { useReducer } from 'react';

// Definiujemy akcje
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const REMOVE_ALL = 'REMOVE'

// Przykładowe produkty
const products = [
  {
    id: 0,
    name: "produkt1",
    description: "opis produktu1",
    price: 123,
    available: 4
  },
  {
    id: 1,
    name: "produkt2",
    description: "opis produktu2",
    price: 234,
    available: 5
  },
];



export function OwnCartReducer1() {
  const [state, dispatch] = useReducer(reducer, []);

  function reducer(state, action) {

    switch (action.type) {
      case ADD_TO_CART:

        // Jeśli produkt nie jest jeszcze w koszyku, dodajemy go z ilością 1
        return [...state, { ...action.product, quantity: 1 }];
        case INCREASE:
          // jesli produkt jest w koszyku zwiekszamy jego ilosc
          const productInCart = state.find(item => item.id === action.product.id); 
          if (productInCart) {
            return state.map(item =>
              item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            }
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
        return state.filter(item => item.id !== action.id);
        case REMOVE_ALL: 
        return []
      default:
        return state;
    }
  }
  

  const handleAdd = (product) => {
    dispatch({ type: ADD_TO_CART, product });
  };

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_FROM_CART, id });
  };

  const increase = (product) => {
    dispatch({ type: INCREASE, product });
  } 

  const decrease = (product) => {
    dispatch({type:DECREASE, product})
  }

  const clearAll = () => {
    dispatch({type:REMOVE_ALL})
  }

  return (
    <>
      <div>
        Lista produktow
        {products.map(el => (
          <div key={el.id}>
            <p>{el.name}</p>
            <p>{el.description}</p>
            <p>{el.price}</p>
            <button onClick={() => handleAdd(el)}>Dodaj produkt do koszyka</button>

          </div>
        ))}
      </div>

      <div> 
      {state.length > 0 ? (
          <>
{state.map(el => (

                    <div key={el.id}>
            <p>{el.name}</p>
            <p>{el.description}</p>
            <p>{el.price}</p>
            <p>{el.quantity}</p>
            <button onClick={() => increase(el)}>Zwiększ produkt o 1</button>
            <button  onClick={() => decrease(el)}>Zmniej produkt o 1</button>
            <button onClick={() => handleRemove(el.id)}>Usuń element z koszyka</button>
          </div> 
        ))}
                   <button onClick={() => clearAll()}>Wyczyść koszyk</button>
                   </>
                   ) : null}
      </div>
    </>
  );
}
