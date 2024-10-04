import React from "react";
import './Hero.css'


function Hero () {
    return(
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-text-container"> 
                    <h1>Del din planteglede med andre</h1>
                    <input className="" placeholder="Søk etter plante" type="search"/>
                    <div className="hero-button-container">
                        <button>Legg til</button>
                        <button>Se alle</button>
                    </div>
                </div>
                <div className="img-crop">
                    <img className="hero-image" src="/assets/img1.webp" alt="illustration of a woman watering her flowers"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;