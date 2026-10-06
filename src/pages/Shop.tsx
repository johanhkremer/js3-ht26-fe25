import ProductList from "../components/ProductList";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProducts } from "../hooks/useProducts";

function Shop() {
    const { data: products, isLoading, error } = useProducts()

    if (isLoading) {
        return (
            <>
                <h1>Butik</h1>
                <h2>Våra produkter</h2>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4" aria-busy="true">
                    {Array.from({ length: 8 }, (_, i) => (
                        <li key={i}><ProductCardSkeleton /></li>
                    ))}
                </ul>
            </>
        )
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