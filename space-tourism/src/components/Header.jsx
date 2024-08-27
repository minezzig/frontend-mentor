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
      <div className="desktop-bar">
        <hr/>
      </div>
      <nav className={`${menuOpen && 'open'}`}>
        <ul className="nav-text">
          <li><a href="/" title="home"><span>00 </span>home</a></li>
          <li><a href="/destination" title="destination"><span>01 </span>destination</a></li>
          <li><a href="/crew" title="crew"><span>02 </span>crew</a></li>
          <li><a href="/technology" title="technology"><span>03 </span>technology</a></li>
        </ul>
      </nav>
    </header>
  );
};
