import Image from "next/image"
import { StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Product } from "@/types/product.type"

const priceFormat = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "USD",
})

function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group flex flex-col overflow-hidden border bg-card text-card-foreground transition-shadow hover:shadow-md">
            <div className="relative aspect-square bg-white">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-6 transition-transform group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                {product.category && (
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {product.category}
                    </span>
                )}
                <h2 className="line-clamp-2 text-sm font-medium">{product.title}</h2>

                {product.rating && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <StarIcon className="size-3.5 fill-amber-400 text-amber-400" />
                        {product.rating.rate} ({product.rating.count})
                    </div>
                )}

                <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-base font-semibold">{priceFormat.format(product.price)}</span>
                    <Button size="sm">Köp</Button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
