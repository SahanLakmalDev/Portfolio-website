import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sahan</h1>
            <p className={styles.description}>I am a full-stack developer</p>
            <a 
            className={styles.contactBtn}
            href="mailto:sahandeng65@gmail.com">
                Contact me
            </a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="profile-picture"
        className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
