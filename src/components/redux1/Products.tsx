import { useSelector } from "react-redux";
import { RootState } from "./store";
import { SingleProductElement } from "./SingleProductElement";

export const Products = () => {
    const { list, count } = useSelector((state: RootState) => state.products);

    return (
        <div>
            <strong>Products amount: {count}</strong>
            <ul>
                {list.map((element, index) => (
                    <SingleProductElement key={index} name={element} price={(index + 1) * 10} />
                ))}
            </ul>
        </div>
    );
};
