import { SingleSubTodo } from "./SingleSubTodo";
import { useSuBTodos } from "./useSubTodos";
import { SubTodoForm } from "./SubTodoForm";



type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {
    const {data, error, loading, getSubTodos } = useSuBTodos(todoId)


if(error) return <p>{error}</p>

if(loading) return <p>Loading subtodos...</p>

if(!data) return null





return (
    <>
    <SubTodoForm todoId={todoId} onNewSubTodoCallback={getSubTodos} />
    <ul>
    {data.map(subtodo=> <SingleSubTodo key={subtodo.id} element={subtodo} onDeleteCallback={getSubTodos}></SingleSubTodo>)}
</ul>
</>
)
}