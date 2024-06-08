import logo from "../assets/images/logo.svg";
import styles from "../styles/Header.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    document.getElementById("body").classList.toggle("noScroll")
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div
        className={`${styles.headerContainer} ${
          isOpen && styles.open
        }`}
      >
        <img src={logo} alt="logo" />
        <nav>
          <ul className={`${styles.navLinks} ${isOpen && styles.open} `}>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </nav>
       {isOpen && <div className="mask"></div>}
        <img
          className={`${styles.hamburger} ${isOpen && styles.animate}`}
          src={hamburger}
          alt="hamburger nav"
          onClick={handleClick}
        />
        <button>Get Started</button>
      </div>
    </header>
  );
}
