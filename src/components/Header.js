/* src/components/Header.js */
import React from 'react';
import './styles/Header.css';

const Header = () => {
  const handleDropdownSelect = (selectedOption) => {
    // Handle the selected option here (e.g., show/hide components, navigate, etc.)
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <header className="header">
      <div className="search-bar-container">
        <span className="company-logo">pti.</span>
        <div className="search-bar">
          <input type="text" placeholder="Search Audiobook" />
        </div>
      </div>
      <div className="menu-dropdown">
        <label htmlFor="menu">MENU </label>
        <select id="menu" onChange={(e) => handleDropdownSelect(e.target.value)}>
          <option value=""></option>
          <option value="home">Home</option>
          <option value="details">Details</option>
          <option value="category">Category</option>
          <option value="favourites">My Favourites</option>
          <option value="profile">Profile</option>
          <option value="log">Log in/Sign Up</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
