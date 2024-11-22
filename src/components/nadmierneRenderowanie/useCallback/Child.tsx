import { memo } from "react";

type ChildWithFunctionProps = {
    callback:() => void;
}

export const ChildWithFunction =memo( ({callback}: ChildWithFunctionProps) => {

    console.log('Render')

    return <button onClick={callback}>click</button>
})