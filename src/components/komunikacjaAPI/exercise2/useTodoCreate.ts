import { useEffect, useState } from "react";
import { UseApi } from "./useApi";
import { Todo, TodoDto } from "./index";


export const useTodoCreate = () => {
    const {error, loading, apiPost } = UseApi()
    const [data, setData]  = useState<Todo>()

    const createTodo = async (title:string) => {
        const response = await apiPost<Todo,TodoDto>(`todos`, {title});
        if(response) {
            setData(response)
        }
    }
  
    return {
        data,error, loading, createTodo
    }
}