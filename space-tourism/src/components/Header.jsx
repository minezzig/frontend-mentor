import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }
  
    return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/assets/shared/logo.svg" alt="logo"/>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={`/assets/shared/icon-${menuOpen ? 'close' : 'hamburger'}.svg`} alt="menu" />
      </div>
      <div className="desktop-bar">
        <hr/>
      </div>
      <nav className={`${menuOpen && 'open'}`}>
        <ul className="nav-text">
          <li onClick={() => navigate("/")}><span>00 </span>home</li>
          <li onClick={() => navigate("/destination")}><span>01 </span>destination</li>
          <li onClick={() => navigate("/crew")}><span>02 </span>crew</li>
          <li onClick={() => navigate("/technology")}><span>03 </span>technology</li>
        </ul>
      </nav>
    </header>
  );
};
