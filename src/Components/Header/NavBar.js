import React from "react";
import logo from "../../Assets/tienda-online-default.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const menuItems = [
    {
        id: 1,
        label: "Nosotros",
        href: "#Nosotros"
    },
    {
        id:2,
        label: "Menu",
        href: "#Menu"
    },
    {
        id: 3,
        label: "Contacto",
        href: "#Contacto"
    }
]
const NavBar = () => {

    return (
        <header className="nav">
        <img src={logo} className="nav-logo" alt="logo tienda online" />
        <h1>Mi Tienda Online</h1>
        <nav>
            {menuItems.map((item)=>(
                <a className= "nav-item" href={item.href} key={item.id}>
                    {item.label}</a>
           ))}
           
        </nav>
        <CartWidget/>      
        </header>
    )
}

export default NavBar


