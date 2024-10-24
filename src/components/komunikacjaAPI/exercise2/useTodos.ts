import { useEffect, useState } from "react"
import { UseApi } from "./useApi"
import { Todo } from "."

export const useTodos = () => {
    const {error, loading, apiGet} = UseApi()
    const [data, setData] = useState<Todo[]>()


    const getTodos = async () => {
        const response = await apiGet<Todo[]>('todos')
        if(response) setData(response)
    }

    const removeTodo = (id:string) => {
        setData(prevTodos => prevTodos?.filter(todo => todo.id !== id))
    }


    const addTodo =(todo:Todo) => {
        setData(prevTodos => [...(prevTodos || []), todo])
    }

    useEffect(() => {
        getTodos()
    },[])

    return{
        data,error, loading, removeTodo, addTodo
    }
}