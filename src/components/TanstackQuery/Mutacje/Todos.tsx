
import { useGetTodosQuery } from "../Refetch + automatyczne pobranie danych/useGetTodosQuery";
import { useGetSubTodosQuery } from "../Refetch + automatyczne pobranie danych/useGetSubTodosQuery";
import { FormEvent, useState } from "react";
import { useTodoCreate } from "../../komunikacjaAPI/FullApi/useTodoCreate";
import { useTodoCreteMutation } from "./useTodoCreateMutation";


export const TanstackMutation = () => {
    const[value, setValue] = useState('')
    const {mutate:createTodo} = useTodoCreteMutation()

    const {data, refetch} = useGetTodosQuery();

    
    const firstTodoId = data ? data[0].id : undefined

    // const firstTodoId = data ? data[data.length - 1].id : undefined


    const {data:subtodos} = useGetSubTodosQuery(firstTodoId)



    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        createTodo(value)
    }

    if(!data || !subtodos) return null

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="title" value={value} onChange={e=> setValue(e.target.value)}/>
        </form>
        <div>
            <button onClick={()=>refetch()}>Refetch todos</button>
        <ul>
            {data.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
<hr />
        <ul>
            {subtodos.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
        </div>
        </div>
    )
}