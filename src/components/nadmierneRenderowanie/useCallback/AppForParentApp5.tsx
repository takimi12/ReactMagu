import { useState } from "react"
import { Parent } from "./ParentApp5"

export const App = () => {
    const [id, setId] = useState(1000)


    const randomizeId = () => {
        setId(Math.round(Math.random () *1000))
    }

    return (
        <div>
            <h1>ID: {id}</h1>
            <button onClick={randomizeId}>Randomize ID</button>
            <Parent id={id} />
        </div>
    )
}