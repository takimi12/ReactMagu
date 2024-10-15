import { useState } from "react"
import { useApi} from "./useApi"
import { Todo, TodoDto } from "./types"

export const useTodosCreate = () => {
    const { error, loading, apiPost} = useApi()
    const [data, setData] = useState<Todo>()


    const createTodo = async(title:string) => {
        const response = await apiPost<Todo, TodoDto>(`todos`,{title})
        if(response) setData(response)
    }


    return{
        data, error, loading, createTodo
    }

}