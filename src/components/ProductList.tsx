import { products } from "../data/products";
import ProductCard from "./ProductCard";

type ProductListProps = {
    onAddToCart: () => void
}

const ProductList = ({ onAddToCart }: ProductListProps) => {

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
