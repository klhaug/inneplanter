
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';

function App() {
 
console.log('PUBLIC_URL:', process.env.PUBLIC_URL)



  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <Hero />
    </div>
  );
}

export default App;
 