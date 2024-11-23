import { useFormContext } from "react-hook-form"
import { Input } from "./input"
import { OrderData } from "../../schema/order120";

export const BasicData = () => {

    const {register, formState:{errors}} = useFormContext<OrderData>();
    
    return (
        <div>
        <h2>Basic data</h2>
        <Input type='text' label='Name' {...register('basic.name')} error={errors.basic?.name} />
        <Input type="text" label="LastName"{...register('basic.lastname')} error={errors.basic?.name}  />
        <Input type="number" label="Age" {...register('basic.age')} error={errors.basic?.name }/>
    </div>
    )
}