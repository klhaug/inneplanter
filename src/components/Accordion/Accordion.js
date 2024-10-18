import React, { useState } from "react";
import './Accordion.css'
import './AccordionMediaQueries.css'
import { useDatabaseSearch } from "../Database/DatabaseSearchProvider";

const AccordionItem = ({ navn, slekt, vann, giftig, beskrivelse, bilde }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const {isOpen, setIsOpen} = useDatabaseSearch();
  const [localIsOpen, setLocalIsOpen] = useState(false)

  const toggleAccordion = () => {
    if (isOpen === true || localIsOpen === true) {
      setIsOpen(false);
      setLocalIsOpen(false)
    } else {
      setLocalIsOpen(true)
    }
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
      {(isOpen || localIsOpen) &&  <div className="accordion-content">
        <div className="accordion-text-container">
          <h3>{navn}</h3>
          <div className="accordion-stats-container"> 
            <div className="accordion-slekt-container">
              <p>Slekt:</p>
              <p className="accordion-slekt">{slekt}</p>
            </div>
            <div className="accordion-vann-container">
                <p>Vann:</p>
                <p className="accordion-vann">{vann}</p>
            </div>
            <div className="accordion-giftig-container">
                <p>Giftig:</p>
                <p className="accordion-giftig">{giftig}</p>
            </div>
            </div>
            <div className="accordion-beskrivelse-container">
                <p>{beskrivelse}</p>
          </div>
          <div className="seeless-container">
            <p onClick={toggleAccordion}>Se mindre</p>
          </div>
          </div>
          <div className="accordion-plant-image-container">
                <img className="accordion-plant-image" src={`http://localhost:3000/${bilde}`} alt="a plant"/>
          </div>
          <div className="mobile-seeless-container">
            <p onClick={toggleAccordion}>Se mindre</p>
          </div>
        </div>}
    </div>
  );
};

const Accordion = ({plantData}) => {
  const accordionData = plantData


  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem id={item.id} key={index} navn={item.navn} slekt={item.slekt} giftig={item.giftig} vann={item.vann} beskrivelse={item.beskrivelse} bilde={item.imagePath} />
      ))}
    </div>
  );
};

export default Accordion;
