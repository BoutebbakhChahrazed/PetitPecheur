import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import FullMenuPage from './Pages/FullMenuPage';
import ContactPage from './Pages/ContactPage';
import  Footer  from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'menu' && <FullMenuPage onNavigate={handleNavigate} />}
      {currentPage === 'reservation' && <ReservationPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      
      <Footer />
    </div>
  );
}

export default App;
