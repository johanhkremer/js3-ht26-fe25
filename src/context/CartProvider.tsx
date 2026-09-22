import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";

function CartProvider({ children }: { children: ReactNode }) {
    const [cartCount, setCartCount] = useState(0)

    const addToCart = () => setCartCount((cartCount) => cartCount + 1)

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider