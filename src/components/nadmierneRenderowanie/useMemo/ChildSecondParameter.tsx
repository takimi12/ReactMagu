import { memo } from "react";

type ChildProps = {
    value:number[];
}

const heavyCalculations = () => {
    console.log('Heavy Calculations')
    return 100
}

export const Child =memo(({value}:ChildProps) => {

    const calculatedValue = heavyCalculations();

    return <h1>Hello World {calculatedValue}</h1>
},(prevProps, nextProps) => {
    return true
})
/// true zwraca ze propsy sie od siebie nie rónią
/// false zwraca ze propsy się od siebie róznia