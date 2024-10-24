import { useQuery } from "@tanstack/react-query"

type SubTodo = {
    id:string;
    title:string;
}

type TodoWithSubTodos = {
    id:string;
    title:string;
    subtodos:SubTodo[];
}



export const useGetSubTodosQuery = (todoId?:string) => {
    const {data} =  useQuery({
        queryKey:['subtodos', todoId],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/todos/${todoId}?_embed=subtodos`)
            return response.json() as Promise<TodoWithSubTodos>
        },
        enabled: !!todoId
    })

 return {
        data: data?.subtodos
    }
}