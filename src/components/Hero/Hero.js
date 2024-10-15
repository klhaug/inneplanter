import React, { useState } from "react";
import './Hero.css'
import './HeroMediaQueries.css'


function Hero ({onButtonClick, plantData}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlants, setFilteredPlants] = useState([]);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);  

    if (query.length > 0) {
        const filtered = plantData.filter(plant =>
          plant.navn.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPlants(filtered);
      } else {
        setFilteredPlants([]); // Clear suggestions if input is empty
      }
      
    };
  
    // Handle when a suggestion is clicked
    const handleSuggestionClick = (plantName) => {
      setSearchQuery(plantName); // Set the clicked suggestion to the search box
      setFilteredPlants([]); // Hide the suggestions
      
    };

   

    return(
            <div className="hero-container">
                <div className="hero-text-container"> 
                    <h1>Del din planteglede med andre</h1>
                    <div className="search-and-button-container">
                        <input 
                            className="hero-search" 
                            placeholder="Søk etter plante" 
                            type="search"
                            value={searchQuery}
                            onChange={handleInputChange}
                            />
                               {filteredPlants.length > 0 && (
                                    <ul style={{
                                    listStyleType: 'none',
                                    padding: 0,
                                    margin: '10px 0',
                                    border: '1px solid #ccc',
                                    width: '380px',
                                    borderRadius: '5px',
                                    backgroundColor: '#fff',
                                    position: 'absolute',
                                    top: '560px',
                                    zIndex: 1,
                                    }}>
                                    {filteredPlants.map((plant, index) => (
                                        <li
                                        key={index}
                                        onClick={() => handleSuggestionClick(plant.navn)}
                                        style={{
                                            color: 'black',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            borderBottom: '1px solid #ddd',
                                        }}
                                        >
                                        {plant.navn}
                                        </li>
                                    ))}
                                    </ul>
                                )}
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