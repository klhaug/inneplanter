import React from "react";
import './Hero.css'
import './HeroMediaQueries.css'


function Hero () {
    return(
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-text-container"> 
                    <h1>Del din planteglede med andre</h1>
                    <div className="search-and-button-container">
                        <input className="hero-search" placeholder="Søk etter plante" type="search"/>
                        <div className="hero-button-container">
                            <button className="hero-add-button">Legg til</button>
                            <button className="hero-database-button">Se alle</button>
                        </div>
                    </div>
                </div>
                <div className="img-crop">
                        <img className="hero-image" src={`${process.env.PUBLIC_URL}/assets/img1.png`} alt="illustration of a woman watering her flowers" />
                </div>

            </div>
        </div>
    );
}

export default Hero;