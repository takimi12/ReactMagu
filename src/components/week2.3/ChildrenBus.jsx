

import React, { MutableRefObject, useRef, useState } from "react"


  const children =
  [
    {
      name: "Barbara",
      age: 10,
    },
  ];


export const ChildrenBusJSX = () => {
    const [bus, setbUS] = useState(children)


  const nameRef = useRef(null);
  const ageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
 
        const nameValue = nameRef.current?.value;
        const ageValue = ageRef.current?.value;
    
        const newChild = {
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
    <input id="name"  ref={nameRef}  name="name" type="text" />



    <label htmlFor="number">Wiek</label>
    <input id="number" ref={ageRef} name="number" type="number" />

<button type="submit"> Dodaj pasaera</button>
</form>

</>

    )
}