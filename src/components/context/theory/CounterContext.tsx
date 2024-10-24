import { createContext } from "react";

// export const CounterContext = createContext<number>(0)


export const CounterContext = createContext<{
    counter:number;
    resetCounter: () => void;
}>({
    counter:0,
    resetCounter:() => {
        
    }
})