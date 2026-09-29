import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";
import type { CartItem, Product } from "@/types/product.type";

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])

    function addToCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find((item) => item._id === product._id)

            if (existing) {
                return prev.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }

            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const clearCart = () => setCart([])

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, totalItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider