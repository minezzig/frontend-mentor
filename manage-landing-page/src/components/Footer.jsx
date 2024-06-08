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
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
            </div>
            <div>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.socials}>
              <li>
                <a href="#"><img src={fb} alt="" /></a>
              </li>
              <li>
                <a href="#"><img src={yt} alt="" /></a>
              </li>
              <li>
                <a href="#"><img src={tw} alt="" /></a>
              </li>
              <li>
                <a href="#"><img src={pt} alt="" /></a>
              </li>
              <li>
                <a href="#"><img src={ig} alt="" /></a>
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
