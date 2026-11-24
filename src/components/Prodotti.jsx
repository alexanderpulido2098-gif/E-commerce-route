import NavbarEco from "./navbar";
import { useState, useEffect, } from "react";
import { Link } from "react-router";
import RenderCard from "../props/Rendercard";



function Prodotti() {
    // ********************

    const [prodotti, setProdotti] = useState([]); //questo state mi serve per renderizare le card cambiando il suo set con la chiamata fetch

    const url = `https://fakestoreapi.com/products`
    // **************************

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((dati) => {
                console.log(dati);
                setProdotti(dati);
            })
            .catch((error) => {
                console.error("Qualcosa è andato storto:", error);
            });
    }, []);



    return (
        <div>
            <NavbarEco />
            <h1>Prodotti</h1>
            <p>I Nostri prodotti</p>
            <div className="Container-cards">
                {prodotti.map((prodotto) => (
                    <Link key={prodotto.id} to={`/Prodotto/${prodotto.id}`}> <RenderCard nome={prodotto.title} img={prodotto.image} prezzo={`${prodotto.price}€`} />
                    </Link>
                ))}
            </div>
        </div>
    )
} export default Prodotti