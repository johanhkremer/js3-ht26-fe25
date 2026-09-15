import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";

type ProductCardProps = {
    product: Product,
    onAddToCart: () => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className="product-card">
            <figure>
                <img src={product.image} />
            </figure>

            <Link to={`/shop/${product.id}`}>
                <strong>{product.title}</strong>
            </Link>

            <span className="price-tag">{Math.round(product.price)} kr</span>

            <button onClick={onAddToCart}>Lägg till i kundvagn</button>
        </div>
    )
}

export default ProductCard