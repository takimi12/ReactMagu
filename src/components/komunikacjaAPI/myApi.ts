import { useState } from "react"
type Entity = {
    id:string;
    prop1:string;
    prop2:string;
}

export const myApi = () => {
    const [entities, setEntities] = useState<Entity[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState('')

    const getData = async () => {
        try{
        const response = await fetch('http://localhost:3000/collection1')
        
            if(response.ok){
                const data:Entity[] = await response.json();
                setEntities(data)
            } else {
                const apiErrror: string = await response.text()
                setError(apiErrror)
            }
    }
    catch(e) {
        console.log(e)
        setError('Wystąpił błąd')
    } finally{
        setLoading(false)
    }

    }

    return {
        entities,loading, error, getData
    }
}