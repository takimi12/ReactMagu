import { useState } from "react"
import { Child } from "./ChildOneParameter";

export const Nadmierne = () => {
    const [counter, setCounter] = useState(0)
    const [value1,setValue1] = useState<Number[]>([])

    const inc = () => {
        setCounter(prevCounter => prevCounter + 1);
}
const value = 5;

    return (
        <div>
            <button onClick={inc}>+1</button>
        <Child value={[5]} />
        </div>
    )
}