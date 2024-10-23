import React from "react";
import './Card.css'
import './CardMediaQueries.css'
import { useDatabaseSearch } from "../Database/DatabaseSearchProvider";
import { useNavigate } from "react-router-dom";



function Card ({plantData}) {
    const latestPlantData = plantData.at(-1)
    const {navn, slekt, vann, giftig, beskrivelse, imagepath, id} = latestPlantData;
    const {isOpen, setIsOpen, databaseSearch, setDatabaseSearch, idSearch, setIdSearch} = useDatabaseSearch();
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setDatabaseSearch(navn)
        setIsOpen(true)
        setIdSearch(id)
        navigate('/inneplanter/database')
    }

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
                        <p className="giftig">{giftig === true ? "Ja" : "Nei"}</p>
                    </div>
                </div>
                <div className="beskrivelse-container">
                    <p>{beskrivelse}</p>
                </div>
            </div>
            <div className="plant-image-container">
                <img className="plant-image" src={imagepath} alt="a plant"/>
            </div>
            <button onClick={handleButtonClick} className="mobile-card-button">Les mer</button>
        </div>
    )
}

export default Card;