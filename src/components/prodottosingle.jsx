import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";



useEffect(ProdottoSingle, [])

function ProdottoSingle() {

    const [prodotto, setProdotto] = useState([]); //questo state mi serve per renderizare le card cambiando il suo set con la chiamata fetch
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `https://fakestoreapi.com/products/${id}`
    // **************************

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



    return (
        <div>
            <NavbarEco />
            <h1>Prodotto</h1>
            <p>prodotto con id:${id}</p>
            <div className="Container-cards">
                {prodotto.map((prodotto) => (
                    <RenderCard key={prodotto.id} nome={prodotto.title} img={prodotto.image} prezzo={prodotto.price} />
                ))}
            </div>
        </div>
    )



}
export default ProdottoSingle