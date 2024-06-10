import styles from "../styles/Footer.module.css";
import logo from "../assets/images/logo-footer.svg";
import fb from "../assets/images/icon-facebook.svg";
import yt from "../assets/images/icon-youtube.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import ig from "../assets/images/icon-instagram.svg";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || !emailPattern.test(email))
      setError("Please insert a valid email");
  };
  return (
    <div className={styles.fullWidth}>
      <footer>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={error && styles.error}
              value={email}
              onChange={handleChange}
              placeholder="Updates in your inbox..."
            />
            {error && <div className={styles.errorMessage}>{error}</div>}{" "}
            <button type="submit" className={styles.btn}>
              GO
            </button>
          </form>
          <div className={styles.links}>
            <div>
              <ul>
                <li>
                  <a href="#" aria-label="Home">Home</a>
                </li>
                <li>
                  <a href="#" aria-label="Pricing">Pricing</a>
                </li>
                <li>
                  <a href="#" aria-label="Products">Products</a>
                </li>
                <li>
                  <a href="#" aria-label="About Us">About Us</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" aria-label="Careers">Careers</a>
                </li>
                <li>
                  <a href="#" aria-label="Community">Community</a>
                </li>
                <li>
                  <a href="#" aria-label="Privacy Policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.socials}>
              <li>
                <a href="#" aria-label="facebook">
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="youtube">
                  <img src={yt} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="twitter">
                  <img src={tw} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="pinterest">
                  <img src={pt} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="instagram">
                  <img src={ig} alt="" />
                </a>
              </li>
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.attribution}>
          Challenge by: &nbsp;
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by:&nbsp;
          <a href="https://gregminezzi.vercel.app">Greg Minezzi</a>.
        </div>
      </footer>
    </div>
  );
}
