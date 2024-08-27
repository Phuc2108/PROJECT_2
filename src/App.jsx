import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
      <main className="overflow-x-hidden antialiased text-neutral-800">
        {/**
        *
        * overflow-x: hidden;
 
  -webkit-font-smoothing: antialiased;
  
  -moz-osx-font-smoothing: grayscale;
  color: #334155;
        */}
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Review />
        <ContactUs/>
        <Footer/>
      </main>
  )
}
