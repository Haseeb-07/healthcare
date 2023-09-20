import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Counter from './Components/Counter';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ContactIcons from './Components/ContactIcons';
import ScrollToTopArrow from './Components/ScrollToTopArrow';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Counter />
      <Services />
      <Contact />
      <ContactIcons />
      <Footer />
      <ScrollToTopArrow />
    </div>
  );
}
