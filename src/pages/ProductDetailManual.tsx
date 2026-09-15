import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Product } from "../types/product.type";

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)

                if (!response.ok) {
                    throw new Error("Någonting gick fel")
                }

                const data = await response.json()
                setProduct(data)
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }

        getProducts()
    }, [])

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
        <div>
            <h2>{product.title}</h2>
            <p>{product.price} kr</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail