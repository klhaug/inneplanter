import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbar-container">

                <nav className="navbar">
                    <div className="logo-container">
                        <a href='#hjem'>Inneplanter</a>
                    </div>
                    <ul className="nav-right-container">
                        <li>Hjem</li>
                        <li>Planter</li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;