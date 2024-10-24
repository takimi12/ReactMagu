import { useEffect, useState } from "react"
import { CounterOuter } from "./CounterOuter"
import { CounterContext } from "./CounterContext"

export const CounterContextApp = () => {
    const [counter, setCounter] = useState<number>( 0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev +1 )
        }, 199)

        return ()=> {
            clearInterval(interval)
        }
        })

        const resetCounter = () => {
            setCounter(0)
        }


    return (
        <CounterContext.Provider value={{counter,resetCounter}}>
        <CounterOuter/>
        </CounterContext.Provider>
    )
    

}