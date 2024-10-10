import React from "react";
import './Card.css'
import './CardMediaQueries.css'


function Card ({plantData}) {
    const {navn, slekt, vann, giftig, beskrivelse, bilde} = plantData;

    return (
        <div className="card-container">
            <div className="card-text-container">
                <h3>{navn}</h3>
                <div className="stats-container">
                    <div className="slekt-container">
                        <p>Slekt:</p>
                        <p className="slekt">{slekt}</p>
                    </div>
                    <div className="vann-container">
                        <p>Vann:</p>
                        <p className="vann">{vann}</p>
                    </div>
                    <div className="giftig-container">
                        <p>Giftig:</p>
                        <p className="giftig">{giftig}</p>
                    </div>
                </div>
                <div className="beskrivelse-container">
                    <p>{beskrivelse}</p>
                </div>
            </div>
            <div className="plant-image-container">
                <img className="plant-image" src={bilde} alt="a plant"/>
            </div>
            <button className="mobile-card-button">Les mer</button>
        </div>
    )
}

export default Card;