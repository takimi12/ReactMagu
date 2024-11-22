import { memo, useEffect } from "react";

type ChildWithFunctionProps = {
    callback:() => void;
}

export const ChildWithFunction =memo( ({callback}: ChildWithFunctionProps) => {

    console.log('Render')


    useEffect(() => {
        callback();
    }, [callback])

    return <p>lorem ipsum</p>
})