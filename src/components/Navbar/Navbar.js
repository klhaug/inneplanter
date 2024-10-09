import React from "react";
import "./navbar.css";
import './NavbarMediaQueries.css'

function Navbar({onButtonClick}) {
    return(
        <div className="navbar-container">

                <nav className="navbar">
                    <div className="logo-container">
                        <a href='#hjem' onClick={() => onButtonClick('home')}>Inneplanter</a>
                    </div>
                    <ul className="nav-right-container">
                        <li><a href="#hjem" onClick={() => onButtonClick('home')}>Hjem</a></li>
                        <li><a href ="#planter" onClick={() => onButtonClick("planter")}>Planter</a></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;