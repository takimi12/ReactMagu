import { useQuery } from "@tanstack/react-query"
import {Order} from "./types"

export const useGetOrdersQuery = () => {
const {data} =  useQuery<Order[]>({
        queryKey:['books'],
        queryFn: async()=> {
            const response = await fetch('http://localhost:3000/Orders');
            return response.json()
        }
    })
    return {data}
}