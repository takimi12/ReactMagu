import { useEffect, useState } from "react"
import { Child } from "./Child"

export const Parent = () => {

    const[counter, setCounter] = useState(0)
    const[counter1, setCounter1] = useState(0)



    useEffect(()=> {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)        
        return () => {
            clearInterval(interval)
        }
        },[])



        useEffect(()=> {
            const interval = setInterval(() => {
                setCounter1(prevCounter => prevCounter + 1)
            }, 5000)        
            return () => {
                clearInterval(interval)
            }
            },[])



    return (
        <>
      <h1>{counter}</h1>
      <Child counter={counter} counter1={counter1} />
      </>
    )
}