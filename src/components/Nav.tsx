import useCart from "@/hooks/useCart";
import { NavLink } from "react-router-dom";

const navLinkBase = "mr-4 border-b-2 pb-[0.15rem] text-foreground no-underline";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? `${navLinkBase} border-foreground`
        : `${navLinkBase} border-transparent hover:border-muted-foreground focus-visible:border-muted-foreground`;


function Nav() {
    const { cart } = useCart()

    console.log("Kundvagn:", cart)

    return (
        <nav className="mb-6 flex items-center justify-between py-4">
            <div>
                <NavLink to="/" className={navLinkClass} end>Homepage</NavLink>
                <NavLink to="/shop" className={navLinkClass}>Butik</NavLink>
                <NavLink to="/comments" className={navLinkClass}>Kommentarer</NavLink>
                <NavLink to="/about" className={navLinkClass}>Om oss</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <span>🛒 Kunvagn: {cart.length}</span>
            </div>
        </nav>
    )
}

export default Nav