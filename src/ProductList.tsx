import { useState } from "react";
import ProductCard from "./ProductCard";

export type Product = { id: number, name: string, price: number }

const products: Product[] = [
    { id: 1, name: "T-shirt", price: 199 },
    { id: 2, name: "Mugg", price: 89 },
    { id: 3, name: "Keps", price: 149 },
]

const ProductList = () => {

    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id}>
                    <strong>{product.name}</strong>- {product.price} kr
                </ProductCard>
            ))}
        </>
    )
}

export default ProductList
