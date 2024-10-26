import { useState } from "react";
import {Data} from "./index"



export const useApi = () => {
    const [error, setError] = useState('');  
    const [loading, setLoading] = useState(false);

    const call = async <R>(id:string, method:'GET' | 'DELETE') => {
        try {        
            const response = await fetch(`http://localhost:3000/${id}`,{method}); 
            if(response.ok) {
                const data: R = await response.json();
                return data
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            } 
        } catch(e) {
            if (e instanceof Error) {
                setError(`An error occurred: ${e.message}`);
            } else {
                setError('An unknown error occurred');
            }

        } finally {
            setLoading(false);  
        }      
    }

    const getMethod = async <R>(id:string) =>{
        return await call<R>(id, 'GET')
    }

    const deleteMethod = async(id:string) => {
        return await call(id, 'DELETE')
    }


    // const postMethod = async (inputValue:string) => {
    //     setLoading(true)
    //     try {
    //         const response = await fetch(`http://localhost:3000/todos`, {
    //             method: 'POST',
    //             body: JSON.stringify({ title: inputValue }), 
    //         });
    //         if (response.ok) {
    //             const newItem = await response.json(); 
    //             setData((prevData) => [...prevData, newItem]); 
    //         } else {
    //             setError(`Error: ${response.status} ${response.statusText}`);
    //         }
    //     } catch (e) {
    //         setError('An error occurred while posting data');
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const patchMethod = async (id:string,newQuantity:number) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/todos/${id}`, {
    //             method: 'PATCH',
    //             body: JSON.stringify({ quantity:newQuantity }), 
    //         });
    //         if (response.ok) {
    //             const updatedItem = await response.json(); 
    //             setData((prevData) => 
    //             prevData.map((item) =>
    //                 item.id === id ? { ...item, quantity: updatedItem.quantity } : item
    //             )
    //         );
    //         } else {
    //             setError(`Error: ${response.status} ${response.statusText}`);
    //         }
    //     } catch (e) {
    //         setError('An error occurred while posting data');
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    return {
     error,loading, deleteMethod, getMethod
    }
}