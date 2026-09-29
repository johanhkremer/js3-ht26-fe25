import type { CartItem, Product } from "@/types/product.type";
import { createContext } from "react";

export type CartContextValue = {
    cart: CartItem[];
    totalItems: number;
    addToCart: (product: Product) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null)