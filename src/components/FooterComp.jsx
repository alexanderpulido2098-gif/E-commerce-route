import { SocialLinks } from "./datiazienda";

function FooterApp() {
    const startYear = 2026;
    const currentYear = new Date().getFullYear();
    const yearRange =
        currentYear > startYear ? `${startYear}–${currentYear}` : `${currentYear}`;

    const social = SocialLinks.map(elemento => {
        return (<div className="social-element" key={elemento.id}>
            <img className="social-img" src={elemento.image} alt={elemento.name} />
        </div>)
    })


    return (
        <>
            <footer>
                <p className="copyR"> &copy; {yearRange} Eccomerce Orange. Tutti i diritti riservati.</p>

            </footer>
            <div className="calltoaction">
                <button className="btnfooter">SING-UP NOW!</button>
                <div className="follow">FOLLOW US{social}</div>

            </div>



        </>

    )
} export default FooterApp