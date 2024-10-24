import { ChangeEvent, FormEvent, useState } from "react"
import { useCreateBookMutation } from "./useCreateBookMutaiton"

export const AddBook = () => {
    const {mutate, isPending} = useCreateBookMutation();

    const [values, setValues] = useState({
        title:'',
        description:'',
        year:2024
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value,type} = e.target

        setValues(prevValues => ({
            ...prevValues,
            [name]: type === "number" ? Number(value) : value
        })
        )

    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        mutate({
            title: values.title,
            description: values.description,
            year: values.year
        })

        setValues({
            title:'',
            description:'',
            year:2024
        })
    }



    return (
        <form onSubmit={handleSubmit}>
        <div>
            <div> <label htmlFor="title">Title</label></div>
            <input type='text' name='title' id='title' value={values.title} onChange={handleChange} />
        </div>
        <div>
            <div>
            <label htmlFor="description">Description</label></div>
            <textarea name="description" id='description' value={values.description} onChange={handleChange}  /> 
        </div>
        <div>
            <div>
            <label htmlFor="year">Year</label></div>
            <input type="number" name="year" id='year' value={values.year} onChange={handleChange}  />
        </div>
        <button disabled={isPending} type="submit" > Save</button>
    </form>
    )
}