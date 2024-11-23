import { InferType, number, object, string,setLocale } from "yup";


setLocale({
    mixed: {
        required: 'This field is required'
    },
    number:{
        min: ({min}) => `This value needs to be min. ${min}`
    },
    string: {
        min: ({min}) => `Minimum length is ${min} characters`
    }
})

const requiredString = (customMessage?: string) => string().required(customMessage);




export const orderSchema = object({
basic:object({
    name:requiredString('to pole błędu nadpisuje domyslne pole błędu').min(3),
    lastname:requiredString().min(3),
    age:number().required().transform(val => val || 0).min(18)
}),
payment: object({
    type:string().oneOf(['card', 'transfer']).required(),
    details: object({
        card: string(),
        cardNumber: string(),
        iban: string(),
    }).when('type', {
        is: 'card',
        then: schema => schema.shape({
            card:requiredString().oneOf(['visa', 'amex']),
            cardNumber: requiredString().when('card', {
                is: 'visa',
                then: schema => schema.length(16),
                otherwise: schema => schema.matches(/^/).length(15)
            }),
        }),
        otherwise: schema => schema.shape({
            iban: requiredString().matches(/^PL/).length(34)
        })
    })
})
})

export type OrderData = InferType<typeof orderSchema>;