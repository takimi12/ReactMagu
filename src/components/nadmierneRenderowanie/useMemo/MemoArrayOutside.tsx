import { useRef, useState } from "react"
import { Child } from "./ChildOneParameter";


const arr = [5]
export const Nadmierne = () => {
    const [counter, setCounter] = useState(0)
    const arr = useRef([5])

    const inc = () => {
        setCounter(prevCounter => prevCounter + 1);
}
const value = 5;

    return (
        <div>
            <button onClick={inc}>+1</button>
        <Child value={arr.current} />
        </div>
    )
}