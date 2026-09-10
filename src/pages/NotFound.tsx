import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>⛔️ Sidan du letar efter finns inte!</h1>
            <Link to="/">Tillbaka till startsidan</Link>
        </>
    )
}

export default NotFound