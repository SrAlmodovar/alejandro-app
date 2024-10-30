import './App.css';
import Nav from './Components/Nav.js';
import Footer from'./Components/Footer.js';
import Herosection from './Components/Hero section.js';
import Highlights from './Components/Highlights.js';
import Testimonials from './Components/Testimonials.js';
import About from './Components/About.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Nav/>
      <Herosection/>
      <Highlights />
      <Testimonials />
      <About />
      <Footer/>
    </>
  );
}

export default App;
