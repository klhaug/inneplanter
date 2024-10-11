import React from "react";
import './Database.css'
import Accordion from "../Accordion/Accordion";

function Database () {
    return(
        <div className="database-background">
            <div className="database-wrapper">
                <div className="database-content-container">
                    <div className="database-header-container">
                        <h1>Våre planter</h1>
                        <div className="database-button-container">
                            <input type="search" className="database-search" placeholder="Søk etter plante"/>
                            <button className="database-add-button">Legg til</button>
                        </div>
                    </div>
                    <div className="database-container">
                        <Accordion />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Database