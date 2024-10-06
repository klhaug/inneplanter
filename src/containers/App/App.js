
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Section2 from '../../components/Section2/Section2';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <Hero />
      <Section2 />
    </div>
  );
}

export default App;
 