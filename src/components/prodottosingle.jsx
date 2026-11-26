import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import RenderCard from "../props/Rendercard";
import NavbarEco from "./navbar";




function ProdottoSingle() {

    const [prodotto, setProdotto] = useState({});//useState(null)con controllo //questo state mi serve per renderizare le card cambiando il suo set con la chiamata fetch
    const { id } = useParams();//llegere variabile prnsente nel indirizo  in questo caso id 
    const navigate = useNavigate(); // usiamo  navigate per spostare caso mai al utente a la paggina dei prodotti 
    const url = `https://fakestoreapi.com/products/${id}`
    // **************************
    useEffect(() => {              //**use efectt come funcione interna per fare la chiamta una volta sola soltanto quando fammo click */
        fetch(url)
            .then((res) => res.json())

            .then((dati) => {
                console.log(dati)
                setProdotto(dati);
            })

            .catch((error) => {
                console.error("Qualcosa è andato storto:", error);
                navigate("/Prodotti");// usiamo  navigate per spostare caso mai al utente a la paggina dei prodotti 
            });
    }, [id]);
    //******FEEDBACK o controllo finche caricano i dati  ******+ */
    // if (!prodotto) {
    //     return (
    //         <div>
    //             <NavbarEco />
    //             <p>Caricamento in corso...</p>
    //         </div>
    //     );
    // }

    return (
        <div>
            <NavbarEco />
            <h1>Prodotto</h1>
            <p>Prodotto con id: {id}</p>
            <div className="Container-cards">
                <RenderCard
                    nome={prodotto.title}
                    img={prodotto.image}
                    prezzo={`${prodotto.price}€`}
                />
            </div>
        </div>
    )



}
export default ProdottoSingle

// //**********controllo opzionale   */
// return (
//     <div>
//         <NavbarEco />
//         <h1>Prodotto</h1>
//         <p>Prodotto con id: {id}</p>
//         <div className="Container-cards">
//             {prodotto ? (                  con un  ternario dentro la struttura possiamo aspetare la rispota fetch
//                 <RenderCard
//                     nome={prodotto.title}
//                     img={prodotto.image}
//                     prezzo={prodotto.price}
//                 />
//             ) : (
//                 <p>Caricamento dati del prodotto...</p> /* oppure un'animazione/spinner */
//             )}
//         </div>
//     </div>
// );