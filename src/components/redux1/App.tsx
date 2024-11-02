import { Provider } from "react-redux"
import { store } from "./store"
import { Product } from "./Product"
import { Actions } from "./Actions"
import { Products } from "./Products"
import { IpAddress } from "../redux2/IpAddress"

export const AppRedux = () => {
    return (
        <Provider store={store} >

            <Product />
            <Actions />

            <hr />
            <Products />
            <hr />
            <IpAddress />
            </Provider>
    )
}