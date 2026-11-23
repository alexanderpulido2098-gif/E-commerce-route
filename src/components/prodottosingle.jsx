import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import RenderCard from "../props/Rendercard";
import NavbarEco from "./navbar";




function ProdottoSingle() {

    const [prodotto, setProdotto] = useState(null); //questo state mi serve per renderizare le card cambiando il suo set con la chiamata fetch
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `https://fakestoreapi.com/products/${id}`
    // **************************
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())

            .then((dati) => {
                console.log(dati)
                setProdotto(dati);
            })

            .catch(error => {
                console.error("qualcosa è andato storto");
                navigate("/prodotto");
            });
    }, [id]);
    //******FEEDBACK finche caricano i dati  ******+ */
    if (!prodotto) {
        return (
            <div>
                <NavbarEco />
                <p>Caricamento in corso...</p>
            </div>
        );
    }

    return (
        <div>
            <NavbarEco />
            <h1>Prodotto</h1>
            <p>Prodotto con id: {id}</p>
            <div className="Container-cards">
                <RenderCard
                    nome={prodotto.title}
                    img={prodotto.image}
                    prezzo={prodotto.price}
                />
            </div>
        </div>
    )



}
export default ProdottoSingle