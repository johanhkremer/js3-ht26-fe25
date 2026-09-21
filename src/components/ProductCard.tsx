import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";

type ProductCardProps = {
    product: Product,
    onAddToCart: () => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className="box-border flex h-full flex-col items-start gap-3.5 rounded-md border border-[#ccc] p-5 transition duration-150 ease-in-out hover:border-[#999] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <figure className="m-0 mb-1 w-full">
                <img className="h-40 w-full bg-white object-contain" src={product.image} />
            </figure>

            <Link
                className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-[#222] no-underline hover:underline focus-visible:underline"
                to={`/shop/${product.id}`}
            >
                <strong>{product.title}</strong>
            </Link>

            <div className="mt-auto flex w-full items-center justify-between gap-3 pt-2">
                <span className="inline-block min-w-[4.5rem] rounded bg-[#222] px-2.5 py-1 text-center font-bold text-white">
                    {Math.round(product.price)} kr
                </span>

                <button
                    className="shrink-0 cursor-pointer rounded border-none bg-[#222] px-3.5 py-1.5 text-white transition-colors duration-150 ease-in-out hover:bg-[#444] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]"
                    onClick={onAddToCart}
                >
                    Lägg till i kundvagn
                </button>
            </div>
        </div>
    )
}

export default ProductCard
