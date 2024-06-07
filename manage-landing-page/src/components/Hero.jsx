import React from "react";
import styles from "../styles/Hero.module.css"
import heroImage from "../assets/images/illustration-intro.svg"
export default function Hero() {
  return (
    <section>
      <div className={styles.heroContainer}>
          <div className={styles.mainText}>
              <h1 className={styles.title}>Bring everyone together to build better products.</h1>
              <p className={styles.text}>
                Manage makes it simple for software teams to plan day-to-day tasks while
                keeping the larger team goals in view.
              </p>
              <button>Get Started</button>
          </div>
          <div className={styles.imageContainer}><img src={heroImage} alt="" /></div>
      </div>
    </section>
  );
}
