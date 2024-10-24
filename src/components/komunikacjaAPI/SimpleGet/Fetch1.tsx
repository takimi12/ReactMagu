import { useEffect, useState } from "react";

type Entity = {
    id:string;
    prop1:string;
    prop2:string;
}


export const Fetch1 = () => {
    const [entities,setEntities] = useState<Entity[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState('')



    const getData = async  () => {
        try{
        const response = await fetch('http://localhost:3000/collection1')
        
        if(response.ok){
         const data:Entity[] = await response.json()
        setEntities(data)
        } else {
            const apiErrror:string = await response.text();
            setError(apiErrror)
        }
        } catch (e) {
            setError('Wystąpił błąd')
        } finally{
            setLoading(false)
        }
    
    
    }
    
    
        useEffect(() => {
    getData()
        })



    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return (
        <ul>
        {entities.map(entity => <li key={entity.id}>{entity.prop1} - {entity.prop2}</li>)}           
        </ul>
    
        )
}