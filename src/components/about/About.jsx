import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p>
              Hi, I'm Sahan Lakmal, a Software Engineer. I specialize in Java for backend development and have a strong background in frontend technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
             
              <p>
              I enjoy building responsive sites, developing efficient back-end systems, and creating visually appealing UIs. Beyond work, I explore new technologies through personal projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            
              <p>
              A lifelong learner, I'm open to new opportunities. Let's  <a href="#contact">connect</a>. Thanks for visiting my portfolio!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
