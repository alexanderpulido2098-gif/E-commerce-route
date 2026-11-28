
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import RenderCard from "../props/Rendercard";

import priceContext from "../contextPrice";



function Prodotti() {
    // ********************
    const datiPrice = useContext(priceContext);
    console.log(datiPrice);

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

    const prodottifiltrati = datiPrice.lowprice ? prodotti.filter(prodotto => prodotto.price <= 30) : prodotti;


    return (

        <div>
            <h1>Prodotti</h1>
            <p>I Nostri prodotti</p>
            <div className="Container-cards">
                {prodottifiltrati.map((prodotto) => (
                    <Link key={prodotto.id} to={`/Prodotto/${prodotto.id}`}> <RenderCard nome={prodotto.title} img={prodotto.image} prezzo={`${prodotto.price}€`} />
                    </Link>
                ))}
            </div>
        </div>
    )
} export default Prodotti