import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Currency from './components/Currency';
import Coins from './components/Coins';
import Trade from './components/Trade';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Currency />
      <Coins />
      <Trade />
      <AboutUs />
      <Contact/>
      <Footer />
    </>
  );
}

export default App
