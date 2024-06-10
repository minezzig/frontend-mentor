import React from "react";
import styles from "../styles/Differences.module.css";
import blob from "../assets/images/bg-tablet-pattern.svg"
export default function Differences() {
  return (
    <section className={styles.differences}>
      {/* <img src={blob} className={styles.blob} alt="blob"/> */}
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <h2 className={styles.title}>What’s different about Manage?</h2>
          <p className={styles.content}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className={styles.differencesList}>
          <div className={styles.listItem}>
            <div className={styles.listItemHeader}>
              <span className={styles.number}>01</span>
              <span className={styles.header}>Track company-wide progress</span>
            </div>
            <div>
              <p className={styles.differencesText}>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.listItemHeader}>
              <span className={styles.number}>02</span>
              <span className={styles.header}>Advanced built-in reports</span>
            </div>
            <div>
              <p className={styles.differencesText}>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.listItemHeader}>
              <span className={styles.number}>03</span>
              <span className={styles.header}>
                Everything you need in one place
              </span>
            </div>
            <div>
              <p className={styles.differencesText}>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
