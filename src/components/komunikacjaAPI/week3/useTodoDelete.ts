import { useState } from "react"
import { useApi } from "./useApi"
import { Todo } from "./types"

export const useTodosDelete = () => {
    const { error, loading, apiDelete} = useApi()
    const [data, setData] = useState<Todo>()


    const deleteTodo = async(id:string) => {
        const response = await apiDelete<Todo>(`todos/${id}`)
        if(response) setData(response)
    }


    return{
        data, error, loading, deleteTodo
    }

}