import { useState } from "react"

const API_BASE = 'http://localhost:3000/'


export const useApi = <T>() => {
    const [entities, setEntities] = useState<T>()
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState('')

    const getData = async (url:string) => {
        try{
            const response = await fetch(`${API_BASE}${url}`)
        
            if(response.ok){
                const data: T = await response.json();
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