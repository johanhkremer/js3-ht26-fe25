import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Antal klick: ${count}`
    }, [count])


    return (
        <div>
            <p>Antal klick: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter