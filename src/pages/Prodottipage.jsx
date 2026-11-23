import NavbarEco from "../routes/navbar";
import { useState, useEffect, useParams, useNavigate } from "react";
import RenderCard from "../props/Rendercard";


function ProdottiPage() {

    const [prodotti, setProdotti] = useState([]);
    // const { id } = useParams();

    // const navigate = useNavigate();


    useEffect(() => {
        fetch("https://fakestoreapi.com/products/${id}")
            .then((res) => res.json())
            .then((dati) => {
                console.log(dati)
                setProdotti(dati);

            });

    }, []);


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