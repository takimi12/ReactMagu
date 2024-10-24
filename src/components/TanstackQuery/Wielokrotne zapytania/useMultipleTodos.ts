import {useQueries} from "@tanstack/react-query"

  const ids = ["677f","a762","782e"]
  type Todo = {
    id:string;
    title:string;
  }


  export const useMultipleTodos = () => {
        const queriesResponse =  useQueries({
        queries: ids.map(id =>({
            queryKey:['todos', id],
            queryFn: async() => {
                const response = await fetch(`http://localhost:3000/todos/${id}`);

                return response.json() as Promise<Todo>
            }
        }))
    })

    return {data:queriesResponse
    .filter(query => query.data)
    .map(query => query.data)}
  }