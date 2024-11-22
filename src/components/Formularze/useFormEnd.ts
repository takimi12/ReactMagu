import { ChangeEvent, useState } from "react"


type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

type UseFormReturn<T> = [T, (e: FormChangeEvent ) => void]

const isHTMLInputElement = (target:HTMLElement): target is HTMLInputElement => {
    return target instanceof HTMLInputElement;
}

export const useForm = <T>(initialValues: T ): UseFormReturn<T> => {
    const [formState, setFormState] = useState<T>( initialValues)

    const getValue = (target:FormChangeEvent['target']) => {
        if(target.type === 'checkbox')
        target.value
    }


    const handleChange = (e:FormChangeEvent) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: getValue(e.target)
           }))
      }

return [formState, handleChange]

}