import { useSelector } from "react-redux";
import { RootState } from "../redux1/store";


export const IpAddress = () => {
    const {value, error, loading} = useSelector((state:RootState) => state.ip)

    if(loading) return <p>Loading IP adres</p>
    if(error) return <p>{error}</p>
    return <p>{value} </p>
}