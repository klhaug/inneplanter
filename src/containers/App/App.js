
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';
import Footer from '../../components/footer/Footer';
import FooterBottom from '../../components/footerbottom.js/FooterBottom';
import Database from '../../components/Database/Database';
import { useEffect, useState } from 'react';

function App() {
const [plantData, setPlantdata] = useState([])
const [route, setRoute] = useState('home')
const [fetchTrigger, setFetchTrigger] = useState(false);

const onButtonClick = (route) => {
  setRoute(route)
}

useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(plant => setPlantdata(plant))
  }, [fetchTrigger])

  const handlePlantAdded = () => {
    setFetchTrigger((prev) => !prev); 
  };

  console.log(fetchTrigger)
  console.log(plantData)
  console.log(route)


  return (
    <div className="App">
      <header className="App-header">
        <Navbar onButtonClick = {onButtonClick} />
      </header>
      <div className="hero-wrapper"> 
        {route === 'home' ?
        <Hero onButtonClick = {onButtonClick}/> 
        :
        <Form onPlantAdded={handlePlantAdded}/>
        }
      </div>
        <Section2 />
        <Section3 plantData = {plantData} />
        <Database />
        <Footer />
        <FooterBottom />
    </div>
  );
}

export default App;
 