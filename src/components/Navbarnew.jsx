import React, { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbarnew() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = ["About", "Services", "Contact"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <Logo />

      {/** Add burger menu icon and menu items */}
      <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        {items.map(item => (
          <NavLink key={item} className="navbar__item" to={`/${item.toLowerCase()}`} onClick={toggleMenu}>
            {item}
          </NavLink>
        ))}
      </div>

      {/* Add media query to hide menu items above 500px */}
     
    </header>
  );
}
