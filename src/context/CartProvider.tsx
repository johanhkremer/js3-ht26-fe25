import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";
import type { CartItem, Customer, Order, Product } from "@/types/product.type";

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])
    const [order, setOrder] = useState<Order | null>(null)

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

    function clearCart() {
        setCart([])
    }

    // Sparar en kopia av kundvagnen som order och tömmer sedan kundvagnen
    function placeOrder(customer: Customer) {
        setOrder({
            orderNumber: String(Date.now()).slice(-8),
            items: cart,
            total: totalPrice,
            customer,
        })
        setCart([])
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    const totalPrice = cart.reduce((sum, item) => sum + Math.round(item.price) * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, totalItems, totalPrice, order, addToCart, clearCart, placeOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider