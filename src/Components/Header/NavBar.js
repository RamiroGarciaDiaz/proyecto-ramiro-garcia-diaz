import React from "react";
import logo from "../../Assets/tienda-online-default.png"
import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <header>
        <img src={logo} class="logo" alt="logo tienda online" />
        <h1>Mi Tienda Online</h1>
        <nav>
            <a href="#Nosotros">Nosotros</a>
            <a href="Menu">Menu</a>
            <a href="#Contacto">Contacto</a>
        </nav>
       <ShoppingCartIcon color="success" fontSize="large"/>
        </header>
    )
}

export default NavBar


