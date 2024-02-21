import React from "react";
import Links from "./Links/Links";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    // #1 Parent div
    <div className={styles.container}>
      {/* #2 Logo div */}
      <Link href={'/'} className={styles.logo}>Logo</Link>
      {/* #3 Links div */}
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
