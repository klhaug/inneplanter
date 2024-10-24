import React, { useEffect, useState } from "react";
import './Card.css'
import './CardMediaQueries.css'
import { useDatabaseSearch } from "../Database/DatabaseSearchProvider";
import { useNavigate } from "react-router-dom";



function Card () {
const {isOpen, setIsOpen, databaseSearch, setDatabaseSearch, idSearch, setIdSearch} = useDatabaseSearch();
const [latestPlantData, setLatestPlantData] = useState(null)
const [loading, setLoading] = useState(true)



    useEffect (() => {
        async function getPlantData() {
            try {
              const response = await fetch("http://localhost:3000/plantdatabase");
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const plantData = await response.json(); // Parse the response body as JSON
              setLatestPlantData (plantData.at(-1)) 
              setLoading(false)
             
            } catch (error) {
              console.error('Fetch error:', error);
              setLoading(false);
            }
          }
          const timeoutId = setTimeout(getPlantData, 500);

          return () => clearTimeout(timeoutId);

    }, []);

      const navigate = useNavigate();
  
      const handleButtonClick = () => {
          setDatabaseSearch(navn)
          setIsOpen(true)
          setIdSearch(id)
          navigate('/inneplanter/database')
      }

      

    if(loading) {
        return <div className="card-container">
                 <div className="card-text-container">
                    <h3>Loading...</h3>
                </div>
            </div>
    }
    if(!latestPlantData) {
        return <div>No data available</div>
    }

    const {navn, slekt, vann, giftig, beskrivelse, imagepath, id} = latestPlantData;


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