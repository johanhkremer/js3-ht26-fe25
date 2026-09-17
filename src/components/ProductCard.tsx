import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";

type ProductCardProps = {
    product: Product,
    onAddToCart: () => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className="card product-card">
            <figure>
                <img className="product-card-img" src={product.image} />
            </figure>

            <Link className="product-card-title" to={`/shop/${product.id}`}>
                <strong>{product.title}</strong>
            </Link>

            <div className="product-card-footer">
                <span className="price-tag">{Math.round(product.price)} kr</span>

                <button onClick={onAddToCart}>Lägg till i kundvagn</button>
            </div>
        </div>
    )
}

export default ProductCard