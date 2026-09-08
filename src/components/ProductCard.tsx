import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type ProductCardProps = {
    product: Product,
    onSelect: () => void
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div>
                <strong>{product.name}</strong>- {product.price} kr
            </div>
            <Link to={`/shop/${product.id}`}>{product.name}</Link>
            <button onClick={onSelect}>Välj</button>
        </div>
    )
}

export default ProductCard