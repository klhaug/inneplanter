import React from "react";
import './Section2.css'

function Section2() {
    return (
        <div id="section 2">
            <div>
                <div>
                    <div className="s2-img-container">
                        <img className="s2-image" src={`${process.env.PUBLIC_URL}/assets/img2.webp`} alt="illustration of a woman watering her flowers" />
                    </div>
                    <div className="s2-text-container">
                        <h2>Grønnere sammen – bli med i vårt plantefellesskap!</h2>
                        <p>Bli med i vårt plantefellesskap og del din lidenskap for planter! Her finner du inspirasjon, tips og støtte fra andre planteentusiaster. Sammen skaper vi et grønnere Norge. Registrer deg nå og bli en del av vår voksende plantefamilie!</p>
                        <div className="s2-button-container">
                            <button>Registrer deg</button>
                            <a href="#logginn">Har du allerede konto? Logg inn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;