"use client"

import { Product } from "@/types/product.type";
import { useState } from "react";
import ProductCard from "./product-card";

type ProductListProp = {
    products: Product[]
}

function ProductList({ products }: ProductListProp) {
    const [search, setSearch] = useState("")

    const filtered = products.filter(
        (p) => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className="space-y-6">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Sök produkt..."
                aria-label="Sök produkt"
                className="h-9 w-full max-w-sm border bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring/50"
            />

            {filtered.length === 0 ? (
                <p className="text-sm text-muted-foreground">Inga produkter matchade din sökning.</p>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {filtered.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList
