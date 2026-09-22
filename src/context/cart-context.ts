import { createContext } from "react";

export type CartContextValue = {
    cartCount: number;
    addToCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null)