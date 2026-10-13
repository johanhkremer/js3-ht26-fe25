"use client"

import { Product } from "@/types/product.type";
import { useState } from "react";

type ProductListProp = {
    products: Product[]
}

function ProductList({ products }: ProductListProp) {
    const [search, setSearch] = useState("")

    const filtered = products.filter(
        (p) => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Sök product..."
            />

            {filtered.map((p) => (
                <div key={p.id}>
                    <h2>{p.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default ProductList