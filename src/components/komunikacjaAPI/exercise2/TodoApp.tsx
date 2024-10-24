import { useEffect, useState } from "react"
import { Todo } from "."
import { UseApi } from "./useApi"
import { SingleTodo } from "./SingleTodo"
import { useTodos } from "./useTodos"
import { Todoform } from "./TodoForm"


export const TodoAppKomunikacjaExercise2 = () => {  

const {data, loading, error, removeTodo, addTodo} = useTodos()


if(loading) return <p>Loading</p>
if(error) return <p>{error}</p>
if(!data) return null

return (
    <div>
                <Todoform onNewTodo={addTodo} />
    <ul>
        {data?.map(element => <SingleTodo key={element.id} onTodoRemove={removeTodo} element={element} />)}
    </ul>
    </div>
)

}