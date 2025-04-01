import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";
const Navbar = () =>{
    return (
        <nav className="navbar">
            <div className="leyenda">
                <h2>Mi tienda ecommerce</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default Navbar;
