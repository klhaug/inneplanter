import React from "react";
import "./navbar.css";
import './NavbarMediaQueries.css'

function Navbar() {
    return(
        <div className="navbar-container">

                <nav className="navbar">
                    <div className="logo-container">
                        <a href='#hjem'>Inneplanter</a>
                    </div>
                    <ul className="nav-right-container">
                        <li><a href="#hjem">Hjem</a></li>
                        <li><a href="#planter">Planter</a></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;