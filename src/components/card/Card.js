import React from "react";
import './Card.css'

function Card ({plantData}) {
    const {Navn, Slekt, Vann, Giftig, Beskrivelse, Bilde} = plantData;

    return (
        <div className="card-container">
            <h2>{Navn}</h2>
            <p>{Slekt}</p>
            <p>{Vann}</p>
            <p>{Giftig}</p>
            <p>{Beskrivelse}</p>
            <img src={Bilde}></img>
        </div>
    )
}

export default Card;