import { useCallback, useEffect, useState } from "react";
import { ChildWithFunction } from "./Child3";




export const App = () => {

    const [counter, setCounter] = useState(0)


    const foo =useCallback( (value:number) => {
        console.log('Adding', value)
        setCounter(prevCounter => prevCounter + value)
    },[])

    return (
        <div>
         <ChildWithFunction callback={foo} />
         </div>
)}