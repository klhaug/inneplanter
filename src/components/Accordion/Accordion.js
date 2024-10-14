import React, { useState } from "react";
import './Accordion.css'
import './AccordionMediaQueries.css'

const AccordionItem = ({ navn, slekt, vann, giftig, beskrivelse, bilde }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      {!isOpen && <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{navn}</h3>
        <h3>{slekt}</h3>
        <h3>{vann}</h3>
        <h3>Giftig: {giftig}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>}
      {isOpen && <div className="accordion-content">
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
                <p className="giftig">{giftig}</p>
            </div>
            </div>
            <div className="beskrivelse-container">
                <p>{beskrivelse}</p>
          </div>
          <div className="seeless-container">
            <p onClick={toggleAccordion}><i>Se mindre</i></p>
          </div>
          </div>
          <div className="plant-image-container">
                <img className="plant-image" src={bilde} alt="a plant"/>
          </div>
        </div>}
    </div>
  );
};

const Accordion = ({plantData}) => {
  const accordionData = plantData

  console.log(plantData)

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} navn={item.navn} slekt={item.slekt} giftig={item.giftig} vann={item.vann} beskrivelse={item.beskrivelse} bilde={item.bilde} />
      ))}
    </div>
  );
};

export default Accordion;
