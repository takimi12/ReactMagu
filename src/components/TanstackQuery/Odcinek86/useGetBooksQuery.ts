import { useQuery } from "@tanstack/react-query"
import { useApi } from "./useApi"
import { BookEntity } from ".";

export const useGetBooksQuery =() => {
    const {apiGet} = useApi();
    
   const {data, isFetching} =  useQuery<BookEntity[]>({
        queryKey:['books'],
        queryFn: async() => {
            // const response = await fetch('http://localhost:3000/books')
            // return response.json()

            return apiGet<BookEntity[]>('books')
        }
    })

    return {data, isFetching}
}