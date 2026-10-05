import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

function Shop() {
    const { data: products, isLoading, error } = useProducts()

    if (isLoading) {
        return <p>Laddar produkter...</p>
    }

    if (error) {
        return <p>Någonting gick fel: {error.message}</p>
    }

    if (!products) {
        return <p>Inga prodkter</p>
    }

    return (
        <>
            <h1>Butik</h1>
            <h2>Våra produkter</h2>
            <ProductList products={products} />
        </>

    )
}

export default Shop