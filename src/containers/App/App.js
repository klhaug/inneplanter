
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';
import Footer from '../../components/footer/Footer';
import FooterBottom from '../../components/footerbottom.js/FooterBottom';
import Database from '../../components/Database/Database';
import ErrorPage from '../Error/error-page';
import Home from '../Home/Home';
import Applayout from '../Applayout/Applayout';

import { Children, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/inneplanter',
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const response = await fetch ("http://localhost:3000/plantdatabase")
          return response.json();
        },
      },
      {
        path: 'add-plant',
        element: <Form />,
      },
      {
        path: 'database',
        element: <Database />,
        loader: async () => {
          const response = await fetch ("http://localhost:3000/plantdatabase")
          return response.json();
        },
        errorElement: <ErrorPage />,
        children: [
          {
            path:"add-plant",
            element: <Form />
          },
          {
            path:'new-plant-added',
            element: null
          }
    ]
  },
  
    ]
  }
])



function App() {
const [latestPlantData, setLatestPlantdata] = useState([])
const [plantData, setPlantData] = useState([])
const [route, setRoute] = useState('home')
const [fetchTrigger, setFetchTrigger] = useState(false);
const onButtonClick = (route) => {
  setRoute(route)
}

useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(plant => setLatestPlantdata(plant))
  }, [fetchTrigger])

  const handlePlantAdded = () => {
    setFetchTrigger((prev) => !prev); 
  };

useEffect(() => {
  fetch("http://localhost:3000/plantdatabase")
    .then(response => response.json())
    .then(data => setPlantData(data))
}, [fetchTrigger])


  console.log(fetchTrigger)
  console.log(latestPlantData)
  console.log(route)
  console.log(plantData)


  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <header className="App-header">
        <Navbar onButtonClick = {onButtonClick} />
      </header>
      <div className="hero-wrapper"> 
        {route === 'home' ?
        <Hero plantData = {plantData} onButtonClick = {onButtonClick}/> 
        :
        <Form onPlantAdded={handlePlantAdded}/>
        }
      </div>
        <Section2 />
        <Section3 plantData = {latestPlantData} />
        <Database plantData = {plantData}/>
        <Footer />
        <FooterBottom /> */}
    </div>
  );
}

export default App;
 