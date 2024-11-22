import { memo, useMemo } from "react"
import { GrandChild } from "./GrandChild"
import { array } from "yup"

type Counters = {
    counter:number,
    counter1:number
}




export const Child =memo( ({counter, counter1}:Counters) => {
   
    const myArray = useMemo(() => {
        const array: number[] = [];
        array.length = counter1;
        return array;
      }, [counter1]);



const generateArray = (howMany:number) => {
    const array:number[] = []


    for(let i = 0; i<howMany ; i++) {
        array.push(Math.round(Math.random() * 1000))
    }
    return array
}

   
    return (
        <>
    <h2> dowolna treść</h2>
    <GrandChild myArray={myArray} />
      </>
    )
})