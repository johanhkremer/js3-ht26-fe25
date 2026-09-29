import { Link, useParams } from "react-router-dom";
import type { Product } from "../types/product.type";
import useFetch from "../hooks/useFetch";

function ProductDetail() {
    const { id } = useParams()

    const { data: products, isLoading, error } = useFetch<Product[]>("https://fakestoreapiserver.reactbd.com/products")
    const product = products?.find((p) => p._id === Number(id))

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
        <div className="mt-6 flex flex-wrap gap-6">
            <figure className="flex-[0_0_240px]">
                <img className="size-60 bg-card object-contain" src={product.image} />
            </figure>

            <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
                <h2>{product.title}</h2>
                <p>{product.price} kr</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail