import useCart from "@/hooks/useCart";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const navLinkBase = "mr-4 border-b-2 pb-[0.15rem] text-foreground no-underline";

function navLinkClass({ isActive }: { isActive: boolean }) {
    return isActive
        ? `${navLinkBase} border-foreground`
        : `${navLinkBase} border-transparent hover:border-muted-foreground focus-visible:border-muted-foreground`;
}


function Nav() {
    const { totalItems, clearCart } = useCart()

    return (
        <nav className="mb-6 flex items-center justify-between py-4">
            <div>
                <NavLink to="/" className={navLinkClass} end>Homepage</NavLink>
                <NavLink to="/shop" className={navLinkClass}>Butik</NavLink>
                <NavLink to="/comments" className={navLinkClass}>Kommentarer</NavLink>
                <NavLink to="/about" className={navLinkClass}>Om oss</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <Button onClick={clearCart} variant={"secondary"}>Töm kassa</Button>
                <NavLink to="/cart" className={navLinkClass}>🛒 Kunvagn: {totalItems}</NavLink>
            </div>
        </nav>
    )
}

export default Nav