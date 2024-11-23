import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { RadioButton } from "./RadioButton";

export type RadioGroupProps<T extends FieldValues> = {
    name:Path<T>;
    options: {
        value:string;
        label:string;
    }[],
    control: Control<T>
}

export const RadioGroup = <T extends FieldValues>({options,name,control}:RadioGroupProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field:{onChange}}) => (
                    <div>
                        {options.map(option => 
                        <RadioButton 
                        key={option.value}
                        label={option.label} 
                        value={option.value} 
                        name={name}
                        onChange={onChange}
                        />)}
                    </div>
                
    )}  
        />
    )
}