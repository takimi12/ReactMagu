import * as React from "react"
import {useForm} from 'react-hook-form'


type FormValues = {
    firstName: string;
    lastName: string;
    age:number;
}




export const HookFormRegister = () =>{
    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({
        defaultValues:{
            firstName: "",
            lastName: "",
            age:5
        }
    })
    



    
  





    return (
        <div>
        <form 
        onSubmit={handleSubmit((data) => {
            console.log(data)
        }
        )}>
        <input
        {...register("firstName", {
                required: {
                    value: true,
                    message: "this is required§"
                }
            })}
        />
        <p>{errors.firstName?.message}</p>
        <input 
        {...register("lastName", {
            maxLength: {
                value:5,
                message: "Max lenght is 5"
            },
        })} 
         placeholder="Last Name" 
         />
         <input 
         type="number"
         {...register("age", {valueAsNumber: true})}
         />
         <p>{errors.lastName?.message}</p>
        <input type="submit" />
        </form>
        </div>
    )
}