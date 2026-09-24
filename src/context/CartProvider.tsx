import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";
import type { Product } from "@/types/product.type";

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => setCart((prev) => [...prev, product])

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider