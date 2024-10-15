import { useEffect, useState } from "react";
import { myApi } from "./myApi";



export const List = () => {
const {loading, error, entities, getData} = myApi()


    useEffect(() => {
        getData()
    }, [])




    if(loading) return  <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <ul>
            {entities.map(entity => <li key={entity.id}>{entity.prop1} - {entity.prop2}</li>)}
        </ul>
    )
}