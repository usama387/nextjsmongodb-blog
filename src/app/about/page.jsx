import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    // #1.1 Parent div of the about page
    <div className={styles.container}>
      {/* #1.1 Text Container */}
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>What We Do</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          You can search for specific keywords related to your website theme or
          concept to find suitable GIFs. Additionally, make sure to check the
          licensing terms to ensure that you can use the GIFs for your website
          without any legal issues.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>8k+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1>11k+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      {/* #2.1 Image Container */}
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="about-page image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
