import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" end>Homepage</NavLink>
            <NavLink to="/shop">Butik</NavLink>
            <NavLink to="/about">Om oss</NavLink>
        </nav>
    )
}

export default Nav