import type { ReactNode } from "react";


const ProductCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="product-card">
            {children}
        </div>
    )
}

export default ProductCard