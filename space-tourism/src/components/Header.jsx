import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)
  

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }
    return (
    <header>
      <div className="logo">
        <img src="../../src/assets/shared/logo.svg" alt="logo"/>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={`../../src/assets/shared/icon-${menuOpen ? 'close' : 'hamburger'}.svg`} alt="menu" />
      </div>
      <nav className={`${menuOpen && 'open'}`}>
        <ul className="nav-text">
          <li>home</li>
          <li><span>01 </span>destination</li>
          <li><span>02 </span>crew</li>
          <li><span>03 </span>technology</li>
        </ul>
      </nav>
    </header>
  );
};
