import { useState } from "react";

const MultiState = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [inStock, setInStock] = useState<boolean>(true)

    return (
        <>
            <button onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? "⭐️ Favorite" : "Lägg till favorite"}
            </button>

            <button onClick={() => setInStock(!inStock)}>Växla lagerstatus</button>

            <p>{inStock ? "I lager" : "Finns inte i lager"}</p>

            {isFavorite && <p>Du har lagt till denna produkten som favorit!</p>}
        </>
    )
}

export default MultiState
