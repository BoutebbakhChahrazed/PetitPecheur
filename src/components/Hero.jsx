import React from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';

const Hero = ({ onNavigate }) => {
  const handleExploreMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveTable = () => {
    onNavigate('reservation');
  };

  return (
    <section 
      id="home" 
      className="relative isolate overflow-hidden bg-secondary min-h-screen flex items-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="Restaurant interior with elegant dining setup" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl">
          <div 
            className="inline-block mb-6 px-6 py-2 border border-primary/50"
            aria-label="French Coastal Cuisine tagline"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase">
              French Coastal Cuisine
            </p>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-background mb-8 tracking-tight">
            Where Every Meal<br />
            <span className="italic">Tells a Story</span>
          </h1>
          
          <p className="text-background/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Experience the art of French coastal dining with locally sourced seafood, 
            seasonal ingredients, and an unforgettable ambiance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={handleExploreMenu}
              className="px-10 py-4 bg-primary text-secondary tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Explore our menu"
            >
              Explore Menu
            </button>
            <button 
              onClick={handleReserveTable}
              className="px-10 py-4 border border-background text-background tracking-widest uppercase text-sm transition-all duration-300 hover:bg-background hover:text-secondary focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2"
              aria-label="Make a reservation"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-background/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;