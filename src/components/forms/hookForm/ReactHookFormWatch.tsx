import * as React from "react"
import {useForm} from 'react-hook-form'


type FormValues = {
    firstName: string;
    lastName: string;
    age:number;
}




export const HookFormWatch = () => {
    const {
        register, 
        handleSubmit,
        watch
    } = useForm<FormValues>({
        defaultValues:{
            firstName: "",
            lastName: "",
            age: 5
        }
    });

    // Śledzenie wartości pól formularza
    const firstNameValue = watch("firstName");
    const ageValue = watch("age");

    return (
        <div>
        <form 
        onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
        <input
        {...register("firstName")}
        placeholder="First Name"
        />
        <input 
        {...register("lastName")} 
        placeholder="Last Name" 
        />
        <input 
        type="number"
        {...register("age")}
        />
        <p>Current First Name: {firstNameValue}</p>
        <p>Current Age: {ageValue}</p>
        <input type="submit" />
        </form>
        </div>
    )
}
