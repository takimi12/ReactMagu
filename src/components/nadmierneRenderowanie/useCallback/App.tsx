import { useCallback, useEffect, useState } from "react";
import { ChildWithFunction } from "./Child";

export const Appusecallback = () => {

    const [counter, setCounter]= useState(0)

    useEffect(()=> {
    const interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1)
    }, 1000)        


    return () => {
        clearInterval(interval)
    }

    },[])


    const foo =useCallback( () => {
        console.log('Hello wordl');
    },[])

    return <ChildWithFunction callback={foo} />
}