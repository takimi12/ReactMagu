

import React, { MutableRefObject, useRef, useState } from "react"





interface Child {
    name: string;
    age: number;
  }
  
  const children:Child[] =
  [
    {
      name: "Barbara",
      age: 10,
    },
  ];


export const ChildrenBus = () => {
    const [bus, setbUS] = useState(children)

    const [nameForm, setName]= useState('')
    const [ageForm, setAge] = useState<number>(0)



    const age = React.useRef<HTMLInputElement>(null);
    const name = React.useRef<HTMLInputElement>(null);



  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
 
        const nameValue = nameRef.current?.value;
        const ageValue = ageRef.current?.value;
    
        if (!nameValue || !ageValue) {
          alert("Wszystkie pola muszą być wypełnione");
          return;
        }
    
        const newChild: Child = {
          name: nameValue,
          age: parseInt(ageValue),
        };
    setbUS([...bus, newChild])

    }



  return (
    <>
    <div style={{ display: 'table', width: '100%', borderCollapse: 'collapse' }}>
      {/* Nagłówki tabeli */}
      <div style={{ display: 'table-row', fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
        <div style={{ display: 'table-cell', border: '1px solid black', padding: '10px' }}>
          Imię
        </div>
        <div style={{ display: 'table-cell', border: '1px solid black', padding: '10px' }}>
          Wiek
        </div>
      </div>

      {/* Wiersze tabeli */}
      {bus.map((el, index) => (
        <div key={index} style={{ display: 'table-row' }}>
          <div style={{ display: 'table-cell', border: '1px solid black', padding: '10px' }}>
            {el.name}
          </div>
          <div style={{ display: 'table-cell', border: '1px solid black', padding: '10px' }}>
            {el.age}
          </div>
        </div>
      ))}
    </div>

<form onSubmit={handleSubmit}>
    <label htmlFor="name">Imię</label>
    <input id="name"  ref={name}  name="name" type="text" />



    <label htmlFor="number">Wiek</label>
    <input id="number" ref={age} name="number" type="number" />

<button type="submit"> Dodaj pasaera</button>
</form>

</>

    )
}