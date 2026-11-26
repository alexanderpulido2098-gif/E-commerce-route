function FooterApp() {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearRange =
        currentYear > startYear ? `${startYear}–${currentYear}` : `${currentYear}`;



    return (
        <>
            <footer>
                <p>&copy; {yearRange} Nome Azienda. Tutti i diritti riservati.</p>
            </footer>


        </>

    )
} export default FooterApp