import { memo } from "react";

type ChildProps = {
    value:number[];
}

const heavyCalculations = () => {
    return 100
}

export const Child =({value}:ChildProps) => {
    console.log('hELLO')

    const calculatedValue = heavyCalculations();

    return <h1>Hello World {calculatedValue}</h1>
}