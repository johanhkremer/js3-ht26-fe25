import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {

    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id}>
                    <strong>{product.name}</strong>- {product.price} kr
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </ProductCard>
            ))}
        </>
    )
}

export default ProductList
