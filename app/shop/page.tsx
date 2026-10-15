import { Product } from "@/types/product.type";
import ProductList from "./components/product-list";

async function Shop() {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error("Kunde inte hämta produkter")
    }

    const products: Product[] = await res.json()

    return (
        <section className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Shop</h1>
                <p className="text-sm text-muted-foreground">{products.length} produkter</p>
            </div>

            <ProductList products={products} />
        </section>
    )
}

export default Shop
