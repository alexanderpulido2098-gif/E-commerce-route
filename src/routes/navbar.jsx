import { NavLink } from "react-router";

function Navbar() {


    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Prodotti">Prodotti</NavLink>
        </header>
    );
}