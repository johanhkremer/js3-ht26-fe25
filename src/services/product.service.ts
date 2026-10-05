import type { Product } from "../types/product.type";

const BASE_URL = "https://fakestoreapiserver.reactbd.com/products"

// GET - hämtar alla produkter.
export async function getProducts(): Promise<Product[]> {
    const response = await fetch(BASE_URL)

    if (!response.ok) {
        throw new Error("Kunde inte hämta produkterna")
    }

    return response.json()
}
