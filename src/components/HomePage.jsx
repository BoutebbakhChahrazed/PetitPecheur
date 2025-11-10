import React from 'react';
import Hero from './Hero';
import Menu from './Menu';
import About from './About';

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
