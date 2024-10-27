const API_URL = 'http://localhost:3000/clients'



export const useApi = () => {

    const call = async<R, P={}>(url:string, method:'GET' | 'DELETE' | 'POST', payload?:P):Promise<R> => {

        const fetchConfig = {
            method,
            Headers:{
                'Content=Type': 'application/json'
            },
            body: payload ? JSON.stringify(payload) : undefined
        }
        try{
            const response = await fetch(`${API_URL}${url}`, fetchConfig)

            if(response.ok){
                const data:R = await response.json();
                return data
            }else {
                const apiError:string = await response.text();
                throw new Error(apiError)
            }
        } catch (e) {
            throw new Error('Wystąpił bład!')
        }
    }

    const apiGet = async<R>(url:string) => {
        return await call<R>(url, 'GET')
    }


    const apiPost = async<R,P>(url:string, payload:P) => {
        return await call<R,P>(url,'POST', payload)
    }

    return {
        apiGet, 
        apiPost
    }

}