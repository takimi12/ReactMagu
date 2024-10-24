import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export const UseCounterContext = () => {
    const context = useContext(CounterContext)

    return context
}