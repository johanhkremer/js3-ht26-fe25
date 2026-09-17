import type { Product } from "../types/product.type";
import ProductCard from "./ProductCard";

type ProductListProps = {
    onAddToCart: () => void
    products: Product[]
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {

    return (
        <ul className="product-grid">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ProductList
