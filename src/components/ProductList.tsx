import { products } from "../data/products";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const selectedProduct = products.find((product) => product.id === selectedId)

    return (
        <>
            <p>Vald produkt: {selectedProduct ? selectedProduct.name : "Ingen"}</p>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={() => setSelectedId(product.id)}
                />
            ))}
        </>
    )
}

export default ProductList
