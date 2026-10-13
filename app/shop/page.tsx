import { Product } from "@/types/product.type";
import ProductList from "./components/product-list";

async function Shop() {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error("Kunde inte hämta produkter")
    }

    const products: Product[] = await res.json()

    return (
        <>
            <h1>Shop</h1>

            <ProductList products={products} />

        </>

    )
}

export default Shop