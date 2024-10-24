import { FormEvent, useEffect, useState } from "react"
import { useTodoCreate } from "./useTodoCreate"
import { Todo } from ".";


type TodoFormProps = {
    onNewTodo: (todo:Todo) => void;
}


export const Todoform = ({onNewTodo}: TodoFormProps) => {
    const {createTodo, error, loading,data} = useTodoCreate()
    const [value, setvalue] = useState("")


    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        createTodo(value)
        setvalue('')
    }

    useEffect(() => {
        if(!data) return;
        
        onNewTodo(data)
    }, [data])



if(loading) return <p> loading...</p>

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={value} onChange={e=> setvalue(e.target.value)} />
            {error && <p>{error}</p>}
        </form>
    )
}