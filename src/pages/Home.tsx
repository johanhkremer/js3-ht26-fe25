import LoginReactHookForm from "@/components/LoginReactHookForm";
import LoginReactHookFormZod from "@/components/LoginReactHookFormZod";
import LoginUseState from "@/components/LoginUseState";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h2>Välkommen till butiken</h2>
            <p>
                Här hittar du praktiska prylar för vardagen - allt från ryggsäckar
                och vattenflaskor till hörlurar och bärbara solpaneler.
            </p>
            <p>
                Redo att kika runt? <Link to="/shop">Gå till butiken</Link> för att se
                alla produkter.
            </p>

            <h2>Shad cn knapp</h2>

            <LoginUseState />
            <LoginReactHookForm />
            <LoginReactHookFormZod />
        </>
    )
}

export default Home

