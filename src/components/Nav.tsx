import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";


type navProps = {
    cartCount: number
}

const Nav = ({ cartCount }: navProps) => {
    return (
        <nav>
            <div>
                <NavLink to="/" className={navLinkClass} end>Homepage</NavLink>
                <NavLink to="/shop" className={navLinkClass}>Butik</NavLink>
                <NavLink to="/about" className={navLinkClass}>Om oss</NavLink>
            </div>
            <div className="cart">
                <span>🛒 Kunvagn: {cartCount}</span>
            </div>
        </nav>
    )
}

export default Nav