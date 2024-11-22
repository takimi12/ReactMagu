import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { OrderData, orderSchema } from "./schema/order"

export const App = () => {

    const {register, handleSubmit,watch, formState:{errors}} = useForm<OrderData>({
        resolver: yupResolver(orderSchema)
    })


    const onSubmit = (data: OrderData) => {
        console.log(data)
    }

    const [type] = watch (['payment.type'])
    return (
        <>
        <h1>Place your order</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2>Basic data</h2>
                <input type='text' {...register('basic.name')} />
                <input type="text"{...register('basic.lastname')}/>
                <input type="number" {...register('basic.age')} />
            </div>
            <div>
                <h2>Payment data</h2>
                <label>
                <input type="radio" {...register('payment.type')} value='card' />
                    Card
                </label>
                <label>
                <input type="radio" {...register('payment.type')}  value='transfer' />
                Transfer
                </label>
                {type === 'card' ? 
                <div>
                <label>
                <input type="radio"  {...register('payment.details.card')}   value='visa' />
                Visa
                </label>
                <label>
                <input type="radio" {...register('payment.details.card')} value='amex' />
                Amex
                </label>
                <input type="text" {...register('payment.details.cardNumber')} />

                </div>
                : null}

                {type === 'transfer' ?
                <input type="text" {...register('payment.details.iban')} />
                : null}

            </div>
            <button type='submit'>Place order</button>
        </form>        
        </>
    )
}