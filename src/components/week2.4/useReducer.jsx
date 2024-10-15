import React, { useReducer } from 'react';




export function OwnCartReducer() {
  
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



const [state, dispatch] = useReducer(  reducer,{id: 0, name:'',description:"", price: 0, available:0}, );
  


function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }




const handleAdd = () => {

}
const handleRemove = () => {

} 


return (
    <>
      <div>
        Lista produktow

        {products.map(el =>
            <div key={el.id}>
                <p>{el.name}</p>
                <p>{el.description}</p>
                <p>{el.price}</p>
                <button onClick={handleAdd}>Dodaj produkt do koszyka</button>
                <button onClick={handleRemove}>Usuń element z koszyka</button>
            </div>
            )}
      </div> 
  
            <div> Produkty w koszyku

            {state.map(el => 
                <div>
                <p>  
                    {el.name}                
                </p>
                <p>
                    {el.description}
                </p>
                <p>
                    {el.price}
                </p>
                </div>
                )}

            </div>

  
  
      Licznik: {state.count}

      <button onClick={() => reducer({ type: 'increment' })}>+</button>
      <button onClick={() => reducer({ type: 'decrement' })}>-</button>

  
  
  
    </>
  );
}

// Czym jest koszyk
// 1. koszyk to tablica, która ma w sobie mieć obiekty reprezentujące produkty

// Czym jest produkt
//  1. Produkt do obiekt, który ma w sobie informacje o produkcie
//  -id
//  -cena
//  -opis
//  -ilość dostępnych produktów






// Mam zrobić:

// 1.Dodawanie produktu do koszyka
// 2.Usuwanie produktu z koszyka
// 3.Zmienianie ilości produktu w koszyku
// 4.wyczyszczenie koszyka
