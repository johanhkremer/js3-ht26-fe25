import type { CartItem, Customer, Order, Product } from "@/types/product.type";
import { createContext } from "react";

export type CartContextValue = {
    cart: CartItem[];
    totalItems: number;
    totalPrice: number;
    order: Order | null;
    addToCart: (product: Product) => void;
    clearCart: () => void;
    placeOrder: (customer: Customer) => void;
}

export const CartContext = createContext<CartContextValue | null>(null)
