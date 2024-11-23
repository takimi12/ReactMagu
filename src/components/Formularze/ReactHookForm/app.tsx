import { useForm } from "react-hook-form";

type FormData = {
    login: string;
    password: string;
    agreement: boolean;
    interested: 'yes' | 'no';
    marketing: 'no' | 'email' | 'phone';
    bio: string;
    age: number;
}

export const ReactHookFormLearning = () => {
    const { register, handleSubmit, reset, getValues, watch, formState: { isValid, errors } } = useForm<FormData>({
        defaultValues: {
            age: 18,
            marketing: 'email',
            interested: 'no',
            agreement: true
        }
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    const resetForm = () => {
        reset({}, { keepValues: true });
    }

    const readValues = () => {
        console.log(getValues());
    }

    const agreementValue = watch('agreement');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('login', { required: true, minLength: 3 })} />
            {errors.login && errors.login.type === 'required' ? <p>This field is required</p> : null}
            {errors.login && errors.login.type === 'minLength' ? <p>This field must be at least 3 characters long</p> : null}

            <input type="password" {...register('password')} />

            <input type="number" {...register('age', { valueAsNumber: true })} />

            <textarea {...register('bio')} />

            <input type="checkbox" {...register('agreement')} />

            <select {...register('interested')}>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>

            <div>
                <label>
                    <input type="radio" value="no" {...register('marketing')} />
                    No
                </label>
                <label>
                    <input type="radio" value="email" {...register('marketing')} />
                    Email
                </label>
                <label>
                    <input type="radio" value="phone" {...register('marketing')} />
                    Phone
                </label>
            </div>

            <button type='button' onClick={resetForm}>Reset</button>
            <button type='button' onClick={readValues}>GET VALUES</button>
            <button type="submit">Log in</button>

            {!agreementValue && <p>You need to agree to the terms</p>}
        </form>
    );
}