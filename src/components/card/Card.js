import React from "react";
import './Card.css'

function Card ({plantData}) {
    const {Navn, Slekt, Vann, Giftig, Beskrivelse, Bilde} = plantData;

    return (
        <div className="card-container">
            <div className="card-text-container">
                <h3>{Navn}</h3>
                <div className="stats-container">
                    <div className="slekt-container">
                        <p>Slekt:</p>
                        <p className="slekt">{Slekt}</p>
                    </div>
                    <div className="vann-container">
                        <p>Vann:</p>
                        <p className="vann">{Vann}</p>
                    </div>
                    <div className="giftig-container">
                        <p>Giftig:</p>
                        <p className="giftig">{Giftig}</p>
                    </div>
                </div>
                <div className="beskrivelse-container">
                    <p>{Beskrivelse}</p>
                </div>
            </div>
            <div className="plant-image-container">
                <img className="plant-image" src={Bilde} alt="a plant"/>
            </div>
        </div>
    )
}

export default Card;