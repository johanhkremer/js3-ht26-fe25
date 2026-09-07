import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Välkommen till vår butik!</h1>
            <Link to="/shop">Till butiken</Link>
        </>

    )
}

export default Home

