import { useEffect, useState } from "react"
import { Todo } from "./types"
import { useApi } from "./useApi"
import { SingleTodo } from "./SingleTodo"
import { useTodos } from "./useTodos"
import { TodoForm } from "./TodoForm"

export const TodoApp = () => {

    const {data, loading, error, removeTodo, addTodo} = useTodos()

    if(loading) return <p> Loadin...</p>
    if(error) return <p>{error}</p>
    return (
        <>
        <TodoForm onNewTodo={addTodo}/>
        <ul>
            {data?.map(element => <SingleTodo key={element.id} onTodoRemove={removeTodo} element={element} />)}
        </ul>
    </>
    )
}