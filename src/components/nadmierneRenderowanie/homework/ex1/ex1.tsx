import { useEffect, useState } from "react"

type Props = {
    direction: 'DESC' | 'ASC'
}


export const RandomArraySorter = ({direction}: Props) => {

const [randomLength, setRandomLength] = useState(0);


useEffect(()=> {
    const interval = setInterval(() => {
        setRandomLength(Math.round(Math.random() * 15)+5)
    }, 1000)        
    return () => {
        clearInterval(interval)
    }
    },[])



const sortedArray = (arrayLength:number, direction:string) => {
const myArray = []
for(let i= 0 ; i<arrayLength; i++) {
    myArray.push(Math.round(Math.random() * arrayLength))
}
myArray.sort((a,b) => direction === 'ASC' ?  a-b : b-a)
return myArray

}
const myArray = sortedArray(randomLength, direction)

const getArray = (dir: 'DESC' | 'ASC', len:number) => {
    const result:number[] = []


    for(let i=0; i < len; i++){
        result.push(Math.round(Math.random()*100))
    }

    result.sort((a,b) => dir === 'ASC' ?  a-b : b-a)


    return result
}


const elements = getArray(direction, randomLength);




    return (
<ul>
    
    {/* {elements.map((value, index) => <li key={index}>{value}</li>)} */}
    {myArray.map((value,index) => <li>{value}</li>)}

</ul>
    )
}