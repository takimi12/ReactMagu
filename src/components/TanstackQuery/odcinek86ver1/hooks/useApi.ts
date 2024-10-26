const API_URL = 'http://localhost:3000/clients'



export const useApi = () => {

    const call = async<R>(url:string, method:'GET' | 'DELETE' | 'POST'):Promise<R> => {

        const fetchConfig = {
            method
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

    return {
        apiGet
    }

}