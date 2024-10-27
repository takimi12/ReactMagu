import { useQuery } from "@tanstack/react-query"
import { Client } from "./types";

export const useGetClientQuery = () => {
const {data} =  useQuery<Client[]>({
        queryKey:['books'],
        queryFn: async()=> {
            const response = await fetch('http://localhost:3000/clients');
            return response.json()
        }
    })
    return {data}
}