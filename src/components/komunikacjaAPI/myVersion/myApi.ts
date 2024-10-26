import { useState } from "react";
import {Data} from "./index"



export const useApi = () => {
    const [data, setData] = useState<Data[]>([]); 
    const [error, setError] = useState('');  
    const [loading, setLoading] = useState(false);

    const call = async () => {
        try {        
            const response = await fetch('http://localhost:3000/todos'); 
            if(response.ok) {
                const data = await response.json();
                setData(data);
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
    const getData = async () => {
        try {        
            const response = await fetch('http://localhost:3000/todos'); 
            if(response.ok) {
                const data = await response.json();
                setData(data);
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

    const deleteMethod = async (id: string) => {
        setLoading(true);  
        try {        
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE'
            }); 
    
            if (response.ok) {
                setData((prevData) => prevData.filter(el => el.id !== id)); 
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            }
        } catch(e) {
            setError('An error occurred while deleting data');
            console.log(e);  
        } finally {
            setLoading(false);  
        }      
    }
    const postMethod = async (inputValue:string) => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/todos`, {
                method: 'POST',
                body: JSON.stringify({ title: inputValue }), 
            });
            if (response.ok) {
                const newItem = await response.json(); 
                setData((prevData) => [...prevData, newItem]); 
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (e) {
            setError('An error occurred while posting data');
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const patchMethod = async (id:string,newQuantity:number) => {
        try {
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ quantity:newQuantity }), 
            });
            if (response.ok) {
                const updatedItem = await response.json(); 
                setData((prevData) => 
                prevData.map((item) =>
                    item.id === id ? { ...item, quantity: updatedItem.quantity } : item
                )
            );
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (e) {
            setError('An error occurred while posting data');
            console.log(e);
        } finally {
            setLoading(false);
        }
    };


    return {
        data,error,loading, deleteMethod,postMethod, patchMethod,getData
    }
}