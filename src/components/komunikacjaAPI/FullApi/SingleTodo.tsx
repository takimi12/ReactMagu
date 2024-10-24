import { useEffect } from "react";
import {Todo} from "./index"
import { UseApi } from "./useApi"
import { useTodosDelete } from "./useTodoDelete";

type SingleTodoProps = {
    onTodoRemove:(id:string) => void
    element:Todo;
}


export const SingleTodo = ({element, onTodoRemove}: SingleTodoProps) => {
    const {apiDelete} = UseApi()


    const {loading, error, deleteTodo, data, setData} = useTodosDelete()



// TO MOJA
    // const handleDelete =() => {
    //     apiDelete(`todos/${element.id}`)

    // }

const onDelete =() => {
    deleteTodo(element.id)
}

useEffect(() => {
    if(!data) return
    
    onTodoRemove(data.id)
}, [data])

    return(
        <li>
            <p>
            {element.title}
            </p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            {error && <p>{error}</p>}
            </li>
    )
}