
import { useEffect, useState } from "react";

function AutoIncrement() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const intervalId = setInterval(() => {
            console.log("tick från interval", intervalId);
            setCount((count) => count + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <div className="card">
            <p>Räknare: {count}</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pausa" : "Starta"}
            </button>
        </div>
    );
}

export default AutoIncrement;