import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Data from './components/Data';
import HeroSection from './components/HeroSection';
import HireMe from './components/HireMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Data />
      <Projects />
      <HireMe />
      <Contact />
    </div>
  );
}

export default App;
