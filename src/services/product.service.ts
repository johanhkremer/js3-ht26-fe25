import type { Product } from "../types/product.type";
import { request } from "./api";

const BASE_URL = "https://fakestoreapiserver.reactbd.com/products"

export function getProducts(): Promise<Product[]> {
    return request(BASE_URL, "Kunde inte hämta produkterna")
}
