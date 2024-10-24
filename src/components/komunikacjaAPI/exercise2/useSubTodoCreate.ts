import { useEffect, useState } from "react";
import { UseApi } from "./useApi";
import { SubTodo,SubTodoDto } from "./index";

export const useSubTodoCreate = () => {
    const {error, loading, apiPost } = UseApi()
    const [data, setData]  = useState<SubTodo>()

    const createSubTodo = async (title:string, todoId:string) => {
        const response = await apiPost<SubTodo,SubTodoDto>(`subtodos`, {title, todoId});
        if(response) {
            setData(response)
        }
    }
  
    return {
        data,error, loading, createSubTodo
    }
}