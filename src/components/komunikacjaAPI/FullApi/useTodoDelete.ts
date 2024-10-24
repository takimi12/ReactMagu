import { useEffect, useState } from "react";
import { UseApi } from "./useApi";
import { Todo } from "./index";

export const useTodosDelete = () => {
    const {error, loading, apiDelete } = UseApi()
    const [data, setData]  = useState<Todo>()

    const deleteTodo = async (id:string) => {
        const response = await apiDelete<Todo>(`todos/${id}`);
        if(response) {
            setData(response)
        }
    }
  
    return {
        data,error, loading, deleteTodo, setData
    }
}