import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    surname: string;
    agreement: boolean;
    nip:number;

}

export const ReactHookFormHomework = () => {
    const { register, handleSubmit, reset, getValues, watch, formState: { isValid, errors } } = useForm<FormData>({
        defaultValues: {
            name:'Jan',
            surname: 'Kowalski',
            agreement: false
        }
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    const agreementValue = watch('agreement');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input type="text" {...register('name', { required: true, minLength: 3 })} />
            {errors.name && errors.name.type === 'required' ? <p>This field is required</p> : null}
            {errors.name && errors.name.type === 'minLength' ? <p>This field must be at least 3 characters long</p> : null}
            </div>
            <div>
            <input type="text" {...register('surname', { required: true, minLength: 3 })} />
            {errors.surname && errors.surname.type === 'required' ? <p>This field is required</p> : null}
            {errors.surname && errors.surname.type === 'minLength' ? <p>This field must be at least 3 characters long</p> : null}
            </div>
            <div>
            <input type="checkbox" {...register('agreement')} />
            <label>Potrzebujesz faktury?</label>
            {agreementValue && 
            <input type="number" {...register('nip', {minLength:10})} />
            } 
            </div>
           
            <button type="submit">Log in</button>

        </form>
    );
}