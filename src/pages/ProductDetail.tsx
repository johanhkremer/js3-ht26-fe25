import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return (
            <div>
                <p>Kunde inte hitta produkt...</p>
                <Link to="/shop">Tillbaka till produkter</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    )
}

export default ProductDetail