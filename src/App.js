import './App.css';
import Nav from './Components/Nav.js';
import Footer from'./Components/Footer.js';
import Herosection from './Components/Hero section.js';
import BookingPage from "./Components/BookingPage.js";
import Highlights from './Components/Highlights.js';
import Testimonials from './Components/Testimonials.js';
import About from './Components/About.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-up";
import { useState } from "react";

function App() {
  const [reserveVisible, setReserveVisible] = useState(false);
  const toggleReserve = () => {
  setReserveVisible(!reserveVisible);
  };
  return (
    <>
      <Nav toggleReserve={toggleReserve}/>
      <Herosection toggleReserve={toggleReserve}/>
      {reserveVisible && <BookingPage />}
      <Highlights />
      <Testimonials />
      <About />
      <Footer/>
      <ScrollToTop showUnder={250} easing='linear'>
       <img src='./Icons_assets/up-arrow.svg' alt='arrow'/>
      </ScrollToTop>
    </>
  );
}

export default App;
