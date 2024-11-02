import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux1/store"

export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();

    return dispatch
}