import { Link } from "react-router-dom";
import AutoIncrement from "../components/AutoIncrement";

const Home = () => {
    return (
        <div>
            <h2>Välkommen till butiken</h2>
            <p>
                Här hittar du praktiska prylar för vardagen - allt från ryggsäckar
                och vattenflaskor till hörlurar och bärbara solpaneler.
            </p>
            <p>
                Redo att kika runt? <Link to="/shop">Gå till butiken</Link> för att se
                alla produkter.
            </p>

            <AutoIncrement />
        </div>

    )
}

export default Home

