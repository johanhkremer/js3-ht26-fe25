import type { Product } from "../types/product.type"
import { request } from "./api"

const BASE_URL = "https://fakestoreapiserver.reactbd.com/products"

export function getProducts() {
    return request<Product[]>(BASE_URL)
}
