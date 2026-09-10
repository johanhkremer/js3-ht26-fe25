import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type ProductCardProps = {
    product: Product,
    onAddToCart: () => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className="product-card">
            <Link to={`/shop/${product.id}`}>
                <strong>{product.name}</strong>
            </Link>

            <span className="price-tag">{product.price} kr</span>

            {!product.inStock && <p>Slut i lager</p>}

            <button onClick={onAddToCart} disabled={!product.inStock}>Lägg till i kundvagn</button>
        </div>
    )
}

export default ProductCard