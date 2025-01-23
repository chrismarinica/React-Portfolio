import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <Navigation />
    </header>
  );
};

export default Header;
