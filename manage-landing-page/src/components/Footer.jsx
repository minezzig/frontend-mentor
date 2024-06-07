import styles from "../styles/Footer.module.css";
import logo from "../assets/images/logo-footer.svg";
import fb from "../assets/images/icon-facebook.svg";
import yt from "../assets/images/icon-youtube.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import ig from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className={styles.fullWidth}>
      <footer>
        <div className={styles.container}>
          <div className={styles.form}>
            <input type="text" placeholder="Updates in your inbox..." />
            <button className={styles.btn}>GO</button>
          </div>
          <div className={styles.links}>
            <div>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </div>
            <div>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.socials}>
              <li>
                <img src={fb} alt="" />
              </li>
              <li>
                <img src={yt} alt="" />
              </li>
              <li>
                <img src={tw} alt="" />
              </li>
              <li>
                <img src={pt} alt="" />
              </li>
              <li>
                <img src={ig} alt="" />
              </li>
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.attribution}>
          Challenge by: 
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by: <a href="https://gregminezzi.vercel.app">Greg Minezzi</a>.
        </div>
      </footer>
    </div>
  );
}
