import { Outlet } from "react-router";
import NavbarEco from "../src/components/navbar";
import FooterApp from "../src/components/FooterComp";

function LayoutCLasic() {


    return (<>
        <header>
            <NavbarEco />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <FooterApp />
        </footer>

    </>
    )



} export default LayoutCLasic