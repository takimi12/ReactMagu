import { useDispatch } from "react-redux"
import { setName, setPrice } from "./slices/productSlice"
import { addProduct } from "./slices/productsSlice"
import { fetchIpAddress } from "../redux2/IpSlice"
import { AppDispatch } from "./store"
import { useAppDispatch } from "../redux2/useAppDispatch"

export const Actions = () => {
    const dispatch = useAppDispatch()


    const setProductName = () => {
        dispatch(setName('Product1234'))

    }

    const setProductPrice = () => {
        dispatch(setPrice(1234))
    }

    const addNewProduct = () => {
        dispatch(addProduct(`Product ${Math.round(Math.random() *1000)}`))
    }

    const getIpAddress = () => {
        dispatch(fetchIpAddress())
    }

    return (
        <div>
            <button onClick={setProductName}>Set product name</button>
            <button onClick={setProductPrice}>Set product price</button>
            <button onClick={addNewProduct}>Add new product</button>
            <button onClick={getIpAddress}>Add new product</button>
        </div>
    )
}