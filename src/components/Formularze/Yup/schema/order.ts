import { InferType, number, object, string } from "yup";

export const orderSchema = object({
basic:object({
    name:string().required().min(3),
    lastname:string().required().min(3),
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
            card:string().oneOf(['visa', 'amex']).required(),
            cardNumber: string().required().when('card', {
                is: 'visa',
                then: schema => schema.length(16),
                otherwise: schema => schema.matches(/^/).length(15)
            }),
        }),
        otherwise: schema => schema.shape({
            iban: string().required().matches(/^PL/).length(34)
        })
    })
})
})

export type OrderData = InferType<typeof orderSchema>;