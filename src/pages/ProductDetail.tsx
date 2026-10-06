import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

function ProductDetail() {
    const { id } = useParams()

    const { data: products, isLoading, error } = useProducts()
    const product = products?.find((p) => p._id === Number(id))

    if (isLoading) {
        return (
            <div className="mt-6 flex flex-wrap gap-6" aria-busy="true">
                <Skeleton className="size-60 flex-[0_0_240px]" />
                <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
                    <Skeleton className="h-8 w-2/3" />
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </div>
        )
    }

    if (error) {
        return <p>Någonting gick fel: {error.message}</p>
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