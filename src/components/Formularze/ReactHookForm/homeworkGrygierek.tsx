import { useState } from "react";
import { useForm } from "react-hook-form"

type FormData = {
    name:string;
    lastname: string;
    invoice: boolean;
    nip?:string;
}




export const App = () => {

    const {register, handleSubmit, watch, formState:{errors}} = useForm<FormData>()
    const [submittedData, setSubmittedData] = useState<FormData>()

    const onSubmit = (data:FormData) => {
    setSubmittedData(data)
    }


    const invoiceNeeded = watch('invoice')

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' type='text' {...register('name', {required: true})} />
                {errors.name ? <p> Field is required</p> : null}
            </div>
            <div>
                <label htmlFor="lastname">Last name</label>
                <input id='lastname' type='text' {...register('lastname', {required:true})} />
                {errors.name? <p> Field is required</p> : null}
            </div>
            <div>
                <label htmlFor="invoice">
                    <input id='invoice' type="checkbox" {...register('invoice')} />
                    I want an invoice
                </label>
            </div>
            {/* {invoiceNeeded ?
            <div>
 
                <label htmlFor="nip">NIP</label>
                <input id='nip' type="text" {...register('nip', {required: true, minLength:10})}/>
            </div> : null} */}

            {/* warunkowa walidacja, jesli pole jest zaznaczone */}
            <div>
 
                <label htmlFor="nip">NIP</label>
                <input id='nip' type="text" {...register('nip', {validate:{
                    required: value => invoiceNeeded ? !!value || 'field is required' : true,
                    minLength: value => invoiceNeeded ? value && value?.length >= 10 : true
                }})}/>
            </div> 



            <button type="submit">Order </button>
        </form>
        {submittedData ? <p>{submittedData?.name} {submittedData?.lastname} {submittedData.invoice ? submittedData.nip : ''}</p> : null}
    </div>
    )
}