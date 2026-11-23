import NavbarEco from "../routes/navbar";
import { useState, useEffect, useParams, useNavigate } from "react";
import RenderCard from "../props/Rendercard";

useEffect(ProdottiPage, []);

function ProdottiPage() {
    // ********************
    const [prodotti, setProdotti] = useState([]); //questo state mi serve per renderizare le card cambiando il suo set con la chiamata fetch
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `https://fakestoreapi.com/products/${id}`
    // **************************

    fetch(url)
        .then((res) => res.json())

        .then((dati) => {
            console.log(dati)
            setProdotti(dati);
        })

        .catch(error => {
            console.error("qualcosa è andato storto");
            navigate("/prodotti");
        });






    return (
        <div>
            <NavbarEco />
            <h1>Prodotti</h1>
            <p>I Nostri prodotti</p>
            <div className="Container-cards">
                {prodotti.map((prodotto) => (
                    <RenderCard key={prodotto.id} nome={prodotto.title} img={prodotto.image} prezzo={prodotto.price} />
                ))}
            </div>
        </div>
    )
} export default ProdottiPage