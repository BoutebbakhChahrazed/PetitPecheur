import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../Components/About';
import Gallery from '../Components/Gallery';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Menu onNavigate={onNavigate} />
      <About />
      <Gallery />
    </>
  );
};

export default HomePage;
