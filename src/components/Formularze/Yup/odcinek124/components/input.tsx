import { forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
    label: string;
    type: 'text' | 'number';
    error?: FieldError
}


export const Input = forwardRef<HTMLInputElement,InputProps  & UseFormRegisterReturn>(({label,type,error, ...register},ref) => {
    

    
    return (
        <div>
            <label>{label}</label>
            <input type={type} ref={ref} {...register}  />
            {error ? <p>
                {error.message}
            </p> : null}
        </div>
    )
})