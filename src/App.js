import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularItems from './components/PopularItems';
import RecommendedItems from './components/RecommendedItems';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="main-content">
        <PopularItems />
        <RecommendedItems />
      </div>
      <Footer />
    </div>
  );
};

export default App;