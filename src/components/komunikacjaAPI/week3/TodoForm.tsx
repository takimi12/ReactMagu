import { FormEvent, useEffect, useState } from "react"
import { useTodosCreate } from "./useTodoCreate"
import { Todo } from "./types"


type TodoFormProps = {
    onNewTodo: (todo:Todo) =>  void
}


export const TodoForm = ({onNewTodo}:TodoFormProps) => {
    const {createTodo, error, loading,data} = useTodosCreate();
    const [value, setValue] = useState('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        createTodo(value);
        setValue('')
    }

    useEffect(()=> {
        if(!data) return
        onNewTodo(data)
    }, [data])



    if(loading) return <p>Loading....</p>

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tttle</label>            
        <input type="text" id="title" name="tile" value={value} onChange={e=> setValue(e.target.value)} />
        
        {error && <p>{error}</p>}
        </form>
    )
} 