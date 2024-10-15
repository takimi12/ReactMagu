import React, { useReducer } from 'react';

// Define types for Product, Cart Item, and Action
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    available: number;
}

interface CartItem extends Product {
    quantity: number;
}

interface Action {
    type: string;
    payload?: Product;
    id?: number;
    product?: CartItem;
}

// Define action types as constants
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const REMOVE_ALL = 'REMOVE_ALL';

const products: Product[] = [
    {
        id: 0,
        name: "produkt1",
        description: "opis produktu1",
        price: 123,
        available: 4,
    },
    {
        id: 1,
        name: "produkt2",
        description: "opis produktu2",
        price: 234,
        available: 5,
    },
];

// Define the initial state type
const initialState: CartItem[] = [];

function reducer(state: CartItem[], action: Action): CartItem[] {
    switch (action.type) {
        case ADD_TO_CART: {
            const uniqueProduct = state.find(el => el.id === action.payload?.id);
            if (!uniqueProduct && action.payload) {
                return [...state, { ...action.payload, quantity: 1 }];
            }
            return state;
        }

        case INCREASE: {
            return state.map(item =>
                item.id === action.product?.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        case DECREASE: {
            const productInCart = state.find(item => item.id === action.product?.id);
            if (productInCart && productInCart.quantity > 0) {
                return state.map(item =>
                    item.id === action.product?.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            return state; // Return the state unchanged if the quantity is 0 or product is not found
        }

        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.id);

        case REMOVE_ALL:
            return [];

        default:
            return state;
    }
}

export function OwnCartReducer11() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddProduct = (el: Product) => {
        dispatch({ type: ADD_TO_CART, payload: el });
    };

    const handleIncrease = (product: CartItem) => {
        dispatch({ type: INCREASE, product });
    };

    const clearAll = () => {
        dispatch({ type: REMOVE_ALL });
    };

    const decrease = (product: CartItem) => {
        dispatch({ type: DECREASE, product });
    };

    const handleRemove = (id: number) => {
        dispatch({ type: REMOVE_FROM_CART, id });
    };

    return (
        <div>
            {products.map(el => (
                <div key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.description}</p>
                    <p>{el.price}</p>
                    <button
                        disabled={state.some(cartItem => cartItem.id === el.id)}
                        onClick={() => handleAddProduct(el)}
                    >
                        Dodaj do koszyka
                    </button>
                </div>
            ))}

            <div>
                {state.length > 0 ? (
                    <>
                        {state.map(el => (
                            <div key={el.id}>
                                <div>
                                    <p>{el.name}</p>
                                    <p>{el.description}</p>
                                    <p>{el.price}</p>
                                    <p>{el.quantity}</p>
                                    <button onClick={() => decrease(el)}>Zmniej produkt o 1</button>
                                    <button onClick={() => handleIncrease(el)}>Zwiększ o 1</button>
                                    <button onClick={() => handleRemove(el.id)}>Usuń element z koszyka</button>
                                </div>
                            </div>
                        ))}
                        <button onClick={clearAll}>Wyczyść koszyk</button>
                    </>
                ) : null}
            </div>
        </div>
    );
}
