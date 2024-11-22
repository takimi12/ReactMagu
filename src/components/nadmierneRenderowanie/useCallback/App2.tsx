import { useCallback, useEffect, useState } from "react";
import { ChildWithFunction } from "./Child2";


type AppProps = {
    id:number;
}


export const App = () => {

    const [counter, setCounter]= useState(0)


    const foo =useCallback( () => {
     setCounter(prevCounter => prevCounter + 1)
    },[])

    return (
        <div>
            <p>{counter}</p>
         <ChildWithFunction callback={foo} />
         </div>
)}