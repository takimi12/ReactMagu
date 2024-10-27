import { useMutation } from "@tanstack/react-query";
import { useApi } from "./useApi"
import { BookDto, BookEntity } from "../types";

export const useCreateBookMutation =() => {
    const {apiPost} = useApi();

    const {mutate, isPending} = useMutation({
        mutationKey:['books', 'create'],
        mutationFn: async (payload:BookDto) => {
            return apiPost<BookEntity,BookDto>('books',payload)
        }
    })


    return{
        mutate,
        isPending
    }
}