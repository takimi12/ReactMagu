
import { useGetTodosQuery } from "./useGetTodosQuery";
import { useGetSubTodosQuery } from "./useGetSubTodosQuery";
import { FormEvent, useState } from "react";
import { useTodoCreate } from "../../komunikacjaAPI/FullApi/useTodoCreate";



export const TanstackRefetch = () => {
    const[value, setValue] = useState('')
    const {createTodo} = useTodoCreate();

    const {data, refetch} = useGetTodosQuery();

    
    const firstTodoId = data ? data[0].id : undefined

    // const firstTodoId = data ? data[data.length - 1].id : undefined


    const {data:subtodos} = useGetSubTodosQuery(firstTodoId)


    console.log(data)

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