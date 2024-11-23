import { useForm } from "react-hook-form";
import { InferType, ObjectSchema, ValidationError, object, string } from "yup";
import {yupResolver} from "@hookform/resolvers/yup"


type LoginDto =  {
    login:string;
    password: string;
}



// const loginSchema:ObjectSchema<LoginDto> = object({
//     login:string().required().min(5),
//     password: string().required().min(5)
// })


// type LoginData = InferType<typeof loginSchema>;


// try{
//     const result = await loginSchema.isValid({
//         login: 'adadadasd',
//         password: 'adadada'
//     })
//     console.log(result)
// } catch (e) {
//     if (e instanceof ValidationError) {
//         console.log(e.message)
//     }
// }


const loginSchema:ObjectSchema<LoginDto> = object({
        login:string().required().min(3),
        password: string().required().min(3)
    })

    type LoginData = InferType<typeof loginSchema>


export const AppYUP = () => {
  const {register,handleSubmit, formState:{errors}} = useForm<LoginData>({
    resolver: yupResolver(loginSchema)
  });

    const onSubmit = (data:LoginData) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('login')}/>
            <input type="password" {...register('password')} />
            <button type="submit">Log in</button>

        </form>
    )
}