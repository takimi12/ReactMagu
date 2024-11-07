import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Link } from "react-router-dom";

export const Avatar = () => {
    const money = useSelector((state: RootState) => state.money.value);

    return (
        <>
        <p> Avatar</p>
    <p>Pieniądze z reduxa <Link to="/money"> {money}</Link></p>
        </>
    )
}