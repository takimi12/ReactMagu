import { useEffect, useState } from "react";
import {SubTodo, Todo, TodoWithSubTodos} from "./index"
import { UseApi } from "./useApi"
import { useTodosDelete } from "./useTodoDelete";
import { SubTodos } from "./SubTodos";

type SingleTodoProps = {
    onTodoRemove:(id:string) => void
    element:Todo;
}


export const SingleTodo = ({element, onTodoRemove}: SingleTodoProps) => {
    const {loading, error, deleteTodo, data, setData} = useTodosDelete()
    const [showTodos, setShowTodos] = useState(false);


const onDelete =() => {
    deleteTodo(element.id)
}

const toggleSubTodo = () => {
    setShowTodos(prevTodos => !prevTodos)
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
            <button disabled={loading} onClick={toggleSubTodo}>Show details</button>

            {showTodos && <SubTodos todoId={element.id} /> }

            {error && <p>{error}</p>}
            </li>
    )
}