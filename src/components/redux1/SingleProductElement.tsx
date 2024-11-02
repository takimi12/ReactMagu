import { useDispatch } from "react-redux";
import { setProduct } from "./slices/productSlice";

type SingleProductElementProps = {
    name:string;
    price:number;
}


export const SingleProductElement =({name, price}:SingleProductElementProps) => {
    const dispatch = useDispatch();

    const selectProduct = () => {
        dispatch(setProduct({
            name,
            price
        }))
    }

    return (
        <li>

        <strong> {name}</strong>
        <button onClick={selectProduct}>Select</button>
        </li>
    )
}