import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Hero.css'
import './HeroMediaQueries.css'
import { useDatabaseSearch } from "../Database/DatabaseSearchProvider";



function Hero ({onButtonClick, plantData}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlants, setFilteredPlants] = useState([]);
    const {isOpen, setIsOpen, databaseSearch, setDatabaseSearch} = useDatabaseSearch();

    const handleInputChange = (event) => {
        const query = event.target.value;
        setDatabaseSearch(query);
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
      setSearchQuery(plantName);
      setDatabaseSearch(plantName) // Set the clicked suggestion to the search box
      setFilteredPlants([]); // Hide the suggestions
      
    };

    const handleSeeAllClick = () => {
        setDatabaseSearch('')
        setIsOpen(false)
    }

   

    return(
        <div className="hero-wrapper">
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
                             style= {{
                                borderRadius: filteredPlants.length > 0 ? '6px 6px 0px 0px' : null
                            }} 
                            />
                               {filteredPlants.length > 0 && (
                                    <ul className="searchbox-ul">
                                    {filteredPlants.map((plant, index) => (
                                        <li className="searchbox-li-item"
                                        key={index}
                                        onClick={() => handleSuggestionClick(plant.navn)}
                                        >
                                        {plant.navn}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                        <div className="hero-button-container">
                           { searchQuery.length === 0 ? <Link className="hero-add-button" to = {`add-plant`}>Legg til</Link> :
                            <Link className="hero-add-button" to = {`database`}>Søk</Link>}
                            <Link onClick={handleSeeAllClick } className="hero-database-button" to ={`database`}>Se alle</Link>
                        </div>
                    </div>
                </div>
                <div className="img-crop">
                        <img className="hero-image" src={`${process.env.PUBLIC_URL}/assets/img3.webp`} alt="illustration of a woman watering her flowers" />
                </div>

            </div>
            </div>
    );
}

export default Hero;