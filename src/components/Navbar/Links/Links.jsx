"use client";

import React, { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./NavLink/NavLink";

// #1 My nav links
const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
  },
];

const Links = () => {
  // #3.1 useState to manage mobile hamburger and navbar
  const [open, setOpen] = useState(false);

  // Temporary user and admin session
  const session = true;
  const isAdmin = true;
  return (
      //  #2 parent div of the pages
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", href: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", href: "/login" }} />
        )}
      </div>

      {/* #3.1 responsive hamburger menu */}
      <button className={styles.menuButton} onClick={()=>setOpen(!open)}>Menu</button>
      {open && (
        <div className={styles.mobilelinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;