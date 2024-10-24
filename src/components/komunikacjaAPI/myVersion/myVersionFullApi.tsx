import { FormEvent, useEffect, useState } from "react";
import { useApi } from "./myApi";
import { SingleTodos } from "./SingleTodos";
import { AddElement } from "./AddElement";


export const MyVersionFullApi = () => {
 const {data, error, loading, getData, deleteMethod, postMethod, patchMethod, } = useApi();




    useEffect(() => {
        getData();
    }, [])

    const handleDelete =(id:string)=>{
        deleteMethod(id)
    }


    if (error) return <p>{error}</p>;
    if (loading) return <p>Loading...</p>;  
    if (!data) return <p>No data available</p>;  

    return (
        <>
                <AddElement postMethod={(inputValue)=>postMethod(inputValue)} />

            <div>
              <SingleTodos data={data}  handleDelete={handleDelete} patchMethod={(id, newQuantity)=> patchMethod(id, newQuantity)}/>
            </div>
        </>
    );
};
