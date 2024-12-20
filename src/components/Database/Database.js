import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import './Database.css'
import './DatabaseMediaQueries.css'
import Accordion from "../Accordion/Accordion";
import { useDatabaseSearch } from "./DatabaseSearchProvider";
import { useLocation } from "react-router-dom";
import Card from "../card/Card";


function Database () {
    const plantData = useLoaderData();
    const location = useLocation()

    const {databaseSearch, setDatabaseSearch, idSearch, setIdSearch, isOpen, setIsOpen} = useDatabaseSearch();
    const [toggleButton, setToggleButton] = useState(true)
    
    const handleButtonClick = () => {
        setToggleButton((prev) => !prev); 
      };

    const handleSeeAllButtonClick = () => {
        setDatabaseSearch('');
        setIdSearch('');
        setIsOpen(false)
    }

    const filteredPlants = plantData.filter(plant => {
        if (idSearch === "") {
            return plant.navn.toLowerCase().includes(databaseSearch.toLowerCase());
        } else {
            return plant.id.toString().includes(idSearch);
        }
    })

    if (databaseSearch === "") {
        setIdSearch('')
        setIsOpen(false)
    };



    return(
        <div>
        <div className="database-background">
            <div className="database-wrapper">
            {location.pathname === '/inneplanter/database/new-plant-added' && <div className="database-card-container">
                <div className="database-card-text-container">
                    <h1>Takk for ditt bidrag!</h1>
                    <Card plantData={plantData} />
                    <div className="close-button-container2"><button onClick={handleButtonClick} className="close-outlet-button"><Link to = {``}>Lukk ▾ </Link></button></div>
                </div>
            </div>}
            {location.pathname === '/inneplanter/database/add-plant' && <div className="database-outlet-container">
                        <div className="close-button-container"><button onClick={handleButtonClick} className="close-outlet-button"><Link to = {``}>Lukk ▾</Link></button></div>
                        <Outlet/>
                    </div>}
                <div className="database-content-container">
                    <div className="database-header-container">
                        <h1>Våre planter</h1>
                            <div className="database-search-and-button-container">
                                <div className="database-search-container">
                                    <input value={databaseSearch} onChange={(e) => setDatabaseSearch(e.target.value)} type="search" className="database-search" placeholder="Søk etter plante"/>
                                </div>
                                <div className="database-button-container">
                                    {(location.pathname === '/inneplanter/database' || location.pathname === '/inneplanter/database/new-plant-added') && (<button onClick={handleButtonClick} className="database-add-button"><Link to = {`add-plant`}>Legg til</Link></button>)}
                                    {location.pathname === '/inneplanter/database/add-plant' && <button onClick={handleButtonClick} className="database-add-button"><Link to = {``}>Tilbake</Link></button>}
                                    {(databaseSearch.length === 0 && idSearch.length === 0) ? null : <button onClick={handleSeeAllButtonClick} className="hero-add-button">Se alle</button>}
                                </div>
                            </div>
                    </div>
                    <div className="database-container">
                        <Accordion plantData = {filteredPlants}/>
                    </div>
                    <div className="mobile-database-button-container">
                        {location.pathname === '/inneplanter/database' && <button onClick={handleButtonClick} className="mobile-database-add-button"><Link to = {`add-plant`}>+</Link></button>}
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Database