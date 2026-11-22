
import { Link } from "react-router";
import foto1 from "../assets/foto1.jpg"

function NotFoundPage() {

    return (
        <div className="paginaNF" >
            <img className="imgNF" src={foto1} alt="error404" />
            <Link to="/">Torna alla home</Link>
        </div>
    )

}

export default NotFoundPage;