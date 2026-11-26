import Gif1 from "../assets/Gif1.gif";


function HomePage() {
    return (
        <div className="Home-container" style={{ backgroundImage: `url(${Gif1})` }}>


            {/*  Contenuto centrale separato dalla Navbar */}
            <div className="Home-content">
                <p>Benvenuti nella home ecommerce</p>
            </div>
        </div>
    );
} export default HomePage