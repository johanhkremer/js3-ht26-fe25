import { useState } from "react";

const ConditionalRendering = () => {
    const [enabled, setEnabled] = useState<boolean>(false)

    return (
        <>
            <button onClick={() => setEnabled(!enabled)}>Enable</button>

            {enabled && <p>Enabled</p>}
        </>
    )
}

export default ConditionalRendering
