import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    // #1 Most parent div
    <div className={styles.container}>
      {/* #2 Text Container */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Turn Ideas Into Reality</h1>
        <p className={styles.desc}>
          We transform visions into tangible realities.Bring your creative
          concepts to life, turning innovative ideas into concrete realities.
        </p>
        {/* #2.1 Buttons Div */}
        <div className={styles.buttons}>
          <button className={styles.button}>Explore</button>
          <button className={styles.button}>Contact</button>
        </div>
        {/* #2.1 Brands Div */}
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands image"
            fill
            className={styles.brandImage}
          />
        </div>
      </div>
      {/* #3.1 Image Container */}
      <div className={styles.imageContainer}>
        {/* #3.1 Using the image here */}
        <Image src="/hero.gif" alt="hero image" fill className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Home;
