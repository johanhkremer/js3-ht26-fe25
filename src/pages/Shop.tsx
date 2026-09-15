import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product.type";

type ShopProps = {
    onAddToCart: () => void
}

const Shop = ({ onAddToCart }: ShopProps) => {
    const { data: products, isLoading, error } = useFetch<Product[]>("https://fakestoreapi.com/products")

    if (isLoading) {
        return <p>Laddar produkter...</p>
    }

    if (error) {
        return <p>Någonting gick fel: {error}</p>
    }

    if (!products) {
        return <p>Inga prodkter</p>
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