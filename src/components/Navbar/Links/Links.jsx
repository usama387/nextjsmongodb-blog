"use client";

import React, { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./NavLink/NavLink";
import Image from "next/image";
import { handleLogout } from "../../../lib/actions";


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

const Links = ({session}) => {
  // #3.1 useState to manage mobile hamburger and navbar
  const [open, setOpen] = useState(false);

  // Temporary user and admin session
  const isAdmin = true;
  return (
    //  #2 parent div of the pages
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", href: "/admin" }} />}
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
              
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", href: "/login" }} />
        )}
      </div>

      {/* #3.1 responsive hamburger menu */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu image"
        width={30}
        height={30}
        onClick={() => setOpen(!open)}
      />
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
