import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    // let count = 0

    const incremement = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={incremement}>+</button>
        </>
    )
}

export default Counter


