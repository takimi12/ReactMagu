import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import { OrderData, orderSchema } from "../schema/order120"
import { Input } from "./components/input"
import {RadioButton} from "./components/RadioButton"
import { BasicData } from "./components/BasicData"
import { PaymentData } from "./components/PaymentData"

export const App = () => {

    const methods = useForm<OrderData>({
        resolver: yupResolver(orderSchema)
    })

    const { handleSubmit, formState :{errors}} = methods;


    const onSubmit = (data: OrderData) => {
        console.log(data)
    }

    return (
        <>
        <h1>Place your order</h1>
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <BasicData />
            <PaymentData/>
            <button type='submit'>Place order</button>
        </form>        
        </FormProvider>
        </>
    )
}