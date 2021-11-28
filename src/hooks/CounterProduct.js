import { useState } from "react/cjs/react.development"


export const CounterProduct = () => {
    const [counter, setCounter] = useState(0)
    const handleDecrement = () =>{
        counter <=0 ? setCounter(0) : setCounter(counter-1)
    }
    const handleIncrement = () =>{
        setCounter(counter+1)
    }
    return {
        counter,
        handleDecrement,
        handleIncrement
    }
}
