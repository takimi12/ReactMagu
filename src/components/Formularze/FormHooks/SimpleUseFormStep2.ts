import { ChangeEvent, useState } from "react"


type UseFormReturn<T> = [T, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => void]



export const useForm = <T>(initialValues: T ):UseFormReturn<T> => {
    const [formState, setFormState] = useState<T>( initialValues)

 

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prevState => ({ 
            ...prevState,
            [e.target.name] : e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
        }))
      }

return [formState, handleChange]

}