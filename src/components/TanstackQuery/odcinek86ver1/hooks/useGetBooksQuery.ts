import { useQuery } from "@tanstack/react-query";
import { BookEntity } from "../types";
import { useApi } from "./useApi";

export const useGetBooksQuery = () => {
    const { apiGet } = useApi();

    const { data } = useQuery<BookEntity[]>({
        queryKey: ['books'],
        queryFn: async () => {
            return apiGet<BookEntity[]>('books');
        },
    });

    return { data }; 
};
