import { ChangeEvent, useState } from "react"



export const useForm = <T>(initialValues: T ) => {
    const [formState, setFormState] = useState<T>( initialValues)

 

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prevState => ({ 
            ...prevState,
            [e.target.name] : e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
        }))
      }

return [formState, handleChange]

}