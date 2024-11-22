import { useCallback, useEffect, useState } from "react"
import {TextInput} from "./TextInput"


export const TextInputParent = () => {

const [first, setFirst] = useState('first')
const [second, setSecond] = useState('second')
const [time, setTime] = useState(new Date())


    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        

        return () => {
            clearInterval(interval)
        }

    },[])




    const onChange1 = useCallback( (e:string) => {
        setFirst(e)
    },[])

    const onChange2 = (e:string) => {
        setSecond(e)
    }


    return (
        <>
        <form>
            <h1>{time.toLocaleTimeString()}</h1>
        <TextInput value={first} onChange={onChange1} />
        <TextInput value={second} onChange={onChange2} />
        </form>
        </>
    )
}