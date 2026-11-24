import { infoAzienda } from "../components/datiazienda"
export default function Rendercardabout() {


    return (

        <section className="chi-siamo-container">
            <h2>La Nostra Azienda</h2>
            <div className="cards-wrapper">
                {infoAzienda.map((item, index) => (
                    <div
                        key={index}
                        className="info-card"
                        // Ogni card aspetta 0.3s in più rispetto alla precedente
                        style={{ animationDelay: `${index * 0.3}s` }}
                    >
                        <h3>{item.titolo}</h3>
                        <p>{item.descrizione}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}