
import { useGetTodosQuery } from "./useGetTodosQuery";
import { useGetSubTodosQuery } from "./useGetSubTodosQuery";



export const Tanstack = () => {

    const {data} = useGetTodosQuery();



    
    // const firstTodoId = data ? data[0].id : undefined


    // const {data:subtodos} = useGetSubTodosQuery(firstTodoId)

    if(!data ) return null

    return (
        <div>
        <ul>
            {data.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
<hr />
        {/* <ul>
            {subtodos.map(element => <li key={element.id}>{element.title}</li>)}
        </ul> */}
        </div>
    )
}