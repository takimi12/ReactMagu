import { useCallback, useEffect, useState } from "react";
import { ChildWithFunction } from "./Child3";


type AppProps = {
    id:number;
}

// w miejscu gdzie wywoluje ten komponent dodac propsa o id 

export const App = ({id}:AppProps) => {


    const foo =useCallback( (value:number) => {
        const url = `https://api.test.com/${id}?value=${value}`
        console.log('Adding', url)
    },[])

    return (
        <div>
         <ChildWithFunction callback={foo} />
         </div>
)}