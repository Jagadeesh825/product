import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import ProductDetails from './components/ProductDetails';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';


const App: React.FC = () => {
  return (

    <div className="App">
      
      <Header />
      <HeroSection />
      <ProductDetails />
      <Testimonials />
      <Footer />
    </div>

    
  );
};

export default App;
