import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import './NavbarMediaQueries.css'

function Navbar({onButtonClick}) {
    return(
        <div className="navbar-container">

                <nav className="navbar">
                    <div className="logo-container">
                      <Link to ={`/inneplanter`}>Inneplanter</Link>
                    </div>
                    <ul className="nav-right-container">
                        <li><Link to ={`/inneplanter`}>Hjem</Link></li>
                        <li><Link to ={`database`}>Planter</Link></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;