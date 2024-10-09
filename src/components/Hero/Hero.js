import React from "react";
import './Hero.css'
import './HeroMediaQueries.css'


function Hero ({onButtonClick}) {
    return(
            <div className="hero-container">
                <div className="hero-text-container"> 
                    <h1>Del din planteglede med andre</h1>
                    <div className="search-and-button-container">
                        <input className="hero-search" placeholder="Søk etter plante" type="search"/>
                        <div className="hero-button-container">
                            <button onClick={() => onButtonClick('leggtilplante')} className="hero-add-button">Legg til</button>
                            <button className="hero-database-button">Se alle</button>
                        </div>
                    </div>
                </div>
                <div className="img-crop">
                        <img className="hero-image" src={`${process.env.PUBLIC_URL}/assets/img3.webp`} alt="illustration of a woman watering her flowers" />
                </div>

            </div>
    );
}

export default Hero;