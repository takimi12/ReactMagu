import { ChangeEvent, useState } from "react";

type UseFormReturn<T> = [T, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void];

export const useForm = <T>(initialValues: T): UseFormReturn<T> => {
    const [formState, setFormState] = useState<T>(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

        if (type === 'file') {
            const files = (e.target as HTMLInputElement).files;
            setFormState(prevState => ({
                ...prevState,
                [name]: files ? files[0] : null,
            }));
        } else {
            setFormState(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    return [formState, handleChange];
};