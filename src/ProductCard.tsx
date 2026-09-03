import type { ReactNode } from "react";


const ProductCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default ProductCard