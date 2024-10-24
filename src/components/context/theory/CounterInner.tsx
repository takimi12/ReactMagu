import { UseCounterContext } from "./useCounterContext"

export const CounterInner = () => {

    const {counter,resetCounter} = UseCounterContext()



    return   (
        <div>
    <h1>{counter}</h1>
    <button onClick={resetCounter}>Reset</button>
    </div>
    )
}