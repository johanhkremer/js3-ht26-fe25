import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import type { Product } from "../types/product.type";

type ShopProps = {
    onAddToCart: () => void
}

const Shop = ({ onAddToCart }: ShopProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch('https://fakestoreapi.com/products')

                if (!response.ok) {
                    throw new Error("Någonting gick fel")
                }

                const data = await response.json()
                setProducts(data)
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }

        getProducts()
    }, [])

    if (isLoading) {
        return <p>Laddar produkter...</p>
    }

    if (error) {
        return <p>Någonting gick fel: {error}</p>
    }

    return (
        <>
            <h1>Butik</h1>
            <h2>Våra produkter</h2>
            <ProductList products={products} onAddToCart={onAddToCart} />
        </>

    )
}

export default Shop