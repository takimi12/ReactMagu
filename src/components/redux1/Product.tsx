import { useSelector } from "react-redux"
import { RootState } from "./store"

export const Product = () => {

const { name, price} = useSelector((state:RootState) => state.product)



if(!name) return <h1>Producct does not exist</h1>

return (
        <>
        <div>
            <h1>{name}</h1>
            <h2>{price.toFixed(2)} PLN</h2>
        </div>
        
        
        </>
    )
}