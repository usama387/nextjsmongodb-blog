import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    // #1.1 Parent Div
    <div className={styles.container}>
      {/* #1.1 Logo Div */}
      <div className={styles.logo}>Usamathedev</div>
      {/* #1.1 Text Div */}
      <div className={styles.text}>Developed by Usama @All rights reserved</div>
    </div>
  );
};

export default Footer;
