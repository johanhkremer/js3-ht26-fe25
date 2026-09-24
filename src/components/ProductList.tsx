import type { Product } from "../types/product.type";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: Product[]
}

function ProductList({ products }: ProductListProps) {

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ProductList
