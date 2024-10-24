import { useEffect, useState } from "react";
import { UseApi } from "./useApi";
import { SubTodo, TodoWithSubTodos } from "./index";

export const useSuBTodos = (todoId:string) => {
    const {error, loading, apiGet } = UseApi()
    const [data, setData]  = useState<SubTodo[]>()

    const getSubTodos = async () => {
        const response = await apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`);
        if(response) {
            setData(response.subtodos)
        }
    }
    useEffect(() => {
        getSubTodos()
    }, [])

    return {
        data,error, loading,getSubTodos
    }
}