import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("UseCart måste användas innanför providern")
    }

    return context
}

export default useCart