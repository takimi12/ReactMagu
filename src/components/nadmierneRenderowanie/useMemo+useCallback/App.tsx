import { useMemo, useState } from "react"
import { Child } from "./Child";

export const NadmierneUsememo = () => {
    const [counter, setCounter] = useState(0)

    const inc = () => {
        setCounter(prevCounter => prevCounter + 1);
}

const arr = useMemo(() => [5],[])

    return (
        <div>
            <button onClick={inc}>+1</button>
        <Child value={[5]} />
        </div>
    )
}