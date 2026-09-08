import { Link } from "react-router-dom";
import type { Product } from "../data/products";

const ProductCard = (
    { product, onSelect }: { product: Product; onSelect: () => void }
) => {
    return (
        <div className="product-card">
            <strong>{product.name}</strong>- {product.price} kr
            <Link to={`/shop/${product.id}`}>{product.name}</Link>
            <button onClick={onSelect}>Köp</button>
        </div>
    )
}

export default ProductCard