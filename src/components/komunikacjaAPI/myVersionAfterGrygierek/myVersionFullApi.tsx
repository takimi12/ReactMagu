import { FormEvent, useEffect, useState } from "react";
import { useApi } from "./myApi";
import { SingleTodos } from "./SingleTodos";
import { Data } from "./index";


export const MyVersionFullApiAfter = () => {
 const { error, loading, getMethod, deleteMethod, } = useApi();

 const [data, setData] = useState<Data[]>()

 const getTodos = async() => {
    const response = await getMethod<Data[]>('todos')
    if(response) setData(response)
 }


    useEffect(() => {
        getTodos();
    }, [])

    const handleDelete =(id:string)=>{
        deleteMethod(`todos/${id}`)
    }


    if (error) return <p>{error}</p>;
    if (loading) return <p>Loading...</p>;  
    if (!data) return <p>No data available</p>;  

    return (
        <>
                {/* <AddElement postMethod={(inputValue)=>postMethod(inputValue)} /> */}

            <div>
              <SingleTodos data={data}   />
            </div>
        </>
    );
};
