import type { Product } from "@/types/product.type";
import { createContext } from "react";

export type CartContextValue = {
    cart: Product[];
    addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextValue | null>(null)