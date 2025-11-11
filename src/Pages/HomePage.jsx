import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../Components/About';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Menu />
      <About />
    </>
  );
};

export default HomePage;
