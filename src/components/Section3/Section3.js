import React from "react";
import Card from "../card/Card";
import './Section3.css'

function Section3({plantData}) {
    return(
        <div className="s3-background">
            <div className="s3-content-frame">
                <div className="s3-content-wrapper">
                    <h2>Nylig lagt til</h2>
                    <Card plantData = {plantData} />
                    <div className="button-container">
                        <button>Legg til ny plante</button>
                        <button>Se alle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;