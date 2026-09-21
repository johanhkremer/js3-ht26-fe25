import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>2026 Alla rättigheter förbehållna</p>
            <div className="footer-links">
                <Link to="/about">Om oss</Link>
                <Link to="/shop">Butik</Link>
                <a href="mailto:kontakt@butiken.se">Kontakt</a>
            </div>
        </footer>
    )
}

export default Footer