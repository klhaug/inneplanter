import React from "react";
import Card from "../card/Card";
import './Section3.css';
import './Section3MediaQueries.css'
import { useNavigate } from "react-router-dom";


function Section3({plantData}) {

const navigate = useNavigate();

const handleButtonClick = (route) => {
    navigate(route)
}

    return(
        <div className="s3-background">
            <div className="s3-content-frame">
                <div className="s3-content-wrapper">
                    <h2>Nylig lagt til</h2>
                    <Card plantData = {plantData} />
                    <div className="s3-button-container">
                        <button onClick={() => handleButtonClick('/add-plant')} className="s3-add-button">Legg til ny plante</button>
                        <button onClick ={() => handleButtonClick('/database')} className="s3-database-button">Se alle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;