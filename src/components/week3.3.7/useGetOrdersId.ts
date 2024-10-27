import { useQuery } from "@tanstack/react-query"
import {Order} from "./types"

export const useGetOrderIdQuery = (id:string) => {
const {data} =  useQuery<Order>({
        queryKey:['books'],
        queryFn: async()=> {
            const response = await fetch(`http://localhost:3000/orders/${id}`);
            return response.json()
        }
    })
    return {data}
}