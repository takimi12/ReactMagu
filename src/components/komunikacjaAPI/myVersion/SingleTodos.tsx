import { useState } from "react"
import {SingleTodosProps } from "./index"


export const SingleTodos = ({ data, handleDelete,patchMethod }: SingleTodosProps) => {
  
    const [newQuantity, setQuantity] = useState<number>(0)
    const [showNewQuantity, setShowQuantity] = useState<boolean | string>()
    const [showiD, SetShowId] = useState('')

   



    const handleShowQuantityEdit = (id:string) => {
        setShowQuantity(id)
        SetShowId(id)
    }

    const handleHideQuantityEdit = (id:string) => {
        setShowQuantity(false)
        patchMethod(id,newQuantity)
     
    }

    const handleChangeQuantity = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setQuantity(Number(e.target.value))
    }



    return (
        <>


        <div>
            {data.map(el=> <div>
                <p>{el.title}</p>
                <p>{el.quantity}</p>
                <button onClick={()=>handleDelete(el.id)}>Usun Element</button>
                {showiD === el.id ? (
                        showNewQuantity ? 
                        <div><input type="number" value={newQuantity} onChange={handleChangeQuantity} /></div> : (null)    
                    ): null}
             {showNewQuantity === el.id  ?   <button onClick={()=>handleHideQuantityEdit(el.id)}>Aktualizacuj Quantity</button> :   <button onClick={()=>handleShowQuantityEdit(el.id)}>Edytuj Quantity </button>}
 
            </div>)}
            
                      
                        
 
</div>
</>
    )
}