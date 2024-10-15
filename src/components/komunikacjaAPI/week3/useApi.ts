import { useState } from "react"

const API_BASE = 'http://localhost:3000/'


export const useApi =() => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    const call = async <R, P={}>(url:string, method: 'GET' | 'DELETE' | 'POST', body?: P) => {
        setLoading(true)

        const commonData = {
            method, 
            Headers: {
                'content-Type' : 'application/json',
            }
        }


        const reqData = body ? {
            ...commonData,
            body: JSON.stringify(body)
        } : commonData

        try {
            const response = await fetch(`${API_BASE}${url}`,reqData)

            if(response.ok) {
                const data: R = await response.json();
                return data;
            } else {
                const apiError: string = await response.text()
                setError(apiError)
            }
         } catch (e) {
            console.log('Error', e);
            setError('wystapil blad')
         } finally {
            setLoading(false)
         }
    }

    const apiDelete = async <R>(url:string) => {
       return await call<R>(url, 'DELETE')
    }
   const apiGet = async <R>(url:string) =>{
       return await call<R>(url, 'GET')
   }
   const apiPost = async <R,P>(url:string, data: P) =>{
    return await call<R, P>(url, 'POST', data)
}


    return {
        apiPost, apiGet, apiDelete,  loading, error
    }

}

