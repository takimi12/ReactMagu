import { useCallback } from "react";
import { ChildWithFunction } from "./Child5";

type ParentProps = {
    id:number;
}

// w miejscu gdzie wywoluje ten komponent dodac propsa o id 

export const Parent = ({id}:ParentProps) => {


    const foo =useCallback( (value:number) => {
        const url = `https://api.test.com/${id}?value=${value}`
        console.log('Adding', url)
    },[])

    return (
        <div>
         <ChildWithFunction callback={foo} />
         </div>
)}