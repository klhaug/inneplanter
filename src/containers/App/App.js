
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';
import Footer from '../../components/footer/Footer';
import { useEffect, useState } from 'react';

function App() {
const [plantData, setPlantdata] = useState([])


useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(plant => setPlantdata(plant))

  }, [])

  console.log(plantData)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Hero />
        <Section2 />
        <Section3 plantData = {plantData} />
        <Footer />
    </div>
  );
}

export default App;
 