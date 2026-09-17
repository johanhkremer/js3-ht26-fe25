import { Link, useParams } from "react-router-dom";
import type { Product } from "../types/product.type";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
    const { id } = useParams()

    const { data: product, isLoading, error } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`)

    if (isLoading) {
        return <p>Laddar produkt...</p>
    }

    if (error) {
        return <p>Någonting gick fel: {error}</p>
    }

    if (!product) {
        return (
            <div>
                <p>Kunde inte hitta produkt...</p>
                <Link to="/shop">Tillbaka till produkter</Link>
            </div>
        )
    }

    return (
        <div className="product-detail">
            <figure className="product-detail-figure">
                <img className="product-detail-img" src={product.image} />
            </figure>

            <div className="product-detail-info">
                <h2>{product.title}</h2>
                <p>{product.price} kr</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail