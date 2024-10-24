import { useEffect, useState } from "react";
import { useApi } from "./myApi";

export type Entity = {
    id:string;
    prop1:string;
    prop2:string;
}



export const List = () => {
const {getData, entities, loading,error} = useApi<Entity[]>();

    useEffect(() => {
    
        getData('collection1')
    
    }, [])

if(loading) return <p>Loading...</p>
if(error) return <p>{error}</p>
if(!entities) return null

    return (
        <ul>
{entities?.map(entity => <li key={entity.id}>{entity.prop1} - {entity.prop2}</li>)}
        </ul>
    )
}