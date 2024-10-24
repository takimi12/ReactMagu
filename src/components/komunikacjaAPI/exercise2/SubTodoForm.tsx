import { FormEvent, useEffect, useState } from "react";
import { useSubTodoCreate } from "./useSubTodoCreate";


type SubTodoFormProps = {
    todoId: string;
    onNewSubTodoCallback : () => void
}

export const SubTodoForm = ({onNewSubTodoCallback, todoId}: SubTodoFormProps) =>{
    const {createSubTodo, error, loading,data} = useSubTodoCreate();
    const [value, setValue] = useState('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        createSubTodo(value,todoId)
        setValue('');
    }

    useEffect(() => {
        if(!data) return
        onNewSubTodoCallback()
    },[data])




    if(loading) return <p>Loading...</p>


    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor="title">Title</label> 
           <input type="text" id="title" name="title" value={value} onChange={e=>setValue(e.target.value)} />
           {error && <p>{error}</p>}
        </form>
    )
}