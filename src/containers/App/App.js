
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';
import Footer from '../../components/footer/Footer';
import FooterBottom from '../../components/footerbottom.js/FooterBottom';
import { useEffect, useState } from 'react';

function App() {
const [plantData, setPlantdata] = useState([])
const [route, setRoute] = useState('home')

const onButtonClick = (route) => {
  setRoute(route)
}

useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(plant => setPlantdata(plant))

  }, [])

  console.log(plantData)
  console.log(route)


  return (
    <div className="App">
      <header className="App-header">
        <Navbar onButtonClick = {onButtonClick} />
      </header>
        <Hero />
        {route === 'home' ?
          <div>
            <Section2 />
            <Section3 plantData = {plantData} />
            <Footer />
            <FooterBottom />
          </div>
          :
          <div>
           <Footer />
           <FooterBottom />
         </div>
        }
    </div>
  );
}

export default App;
 