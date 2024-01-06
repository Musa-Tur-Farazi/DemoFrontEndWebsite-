import React from 'react';
import './styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="text-content">
          <h1>Deliver Food To Your Door Step</h1>
          <p>Authentic food | Quick Service, Fast Delivery</p>
        </div>
        <div className="image-container">
          <img src="/Image1.png" alt="Food Delivery" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
