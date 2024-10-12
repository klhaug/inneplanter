import React, { useState } from "react";
import './Accordion.css'

const AccordionItem = ({ navn, slekt, vann, giftig, beskrivelse, bilde }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{navn}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">

        Slekt:{slekt}<br/>
        Vann:{vann}<br />
        Giftig:{giftig}<br />
        Beskrivelse:{beskrivelse}
        {/* {bilde} */}
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
