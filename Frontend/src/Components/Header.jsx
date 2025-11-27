import React, { useState, useEffect } from 'react';



const Header = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, sectionId) => {
    onNavigate(page);
    setIsMenuOpen(false);
    
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={`fixed w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md  shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="tracking-[0.3em]  uppercase transition-colors  text-primary"
          >
            Petit Pêcheur
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-sm tracking-widest text-primary uppercase transition-colors hover:text-primary relative group"
            >
              Home
              <span className="absolute bottom-0  left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('home', 'menu')}
              className="text-sm tracking-widest uppercase text-primary transition-colors hover:text-primary relative group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('home', 'about')}
              className="text-sm tracking-widest uppercase text-primary transition-colors hover:text-primary relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
             <button 
              onClick={() => handleNavClick('contactus')}
              className="text-sm tracking-widest uppercase text-primary transition-colors hover:text-primary relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('reservation')}
              className="text-sm tracking-widest uppercase text-primary px-8 py-3 border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-secondary"
            >
              Reserve
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-4 space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="block w-full text-left py-3 text-sm tracking-widest uppercase transition-colors hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('home', 'menu')}
              className="block w-full text-left py-3 text-sm tracking-widest uppercase transition-colors hover:text-primary"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('home', 'about')}
              className="block w-full text-left py-3 text-sm tracking-widest uppercase transition-colors hover:text-primary"
            >
              About
            </button>
             <button 
              onClick={() => handleNavClick('contactus')}
              className="block w-full text-left py-3 text-sm tracking-widest uppercase transition-colors hover:text-primary"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleNavClick('reservation')}
              className="block w-full text-left py-3 text-sm tracking-widest uppercase text-primary"
            >
              Reservations
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
