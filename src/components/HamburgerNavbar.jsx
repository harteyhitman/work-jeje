import React, { useState } from 'react';
import '../HamburgerNavbar.css'
import InnerContextNavbar from './InnerContextNavbar';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <InnerContextNavbar toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default HamburgerMenu;
