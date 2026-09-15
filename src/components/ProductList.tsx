import type { Product } from "../types/product.type";
import ProductCard from "./ProductCard";

type ProductListProps = {
    onAddToCart: () => void
    products: Product[]
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {

    return (
        <>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </>
    )
}

export default ProductList
