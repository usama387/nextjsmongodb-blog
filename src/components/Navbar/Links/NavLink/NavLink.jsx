"use client";

import React from 'react';
import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLink = ({item}) => {
  
  // #1.1 Getting the current url
  const pathname = usePathname();


  return (
    // #1 Parent div
    <div className={`${styles.container} ${pathname === item.href && styles.active}`}>
        <Link href={item.href}>{item.title}</Link>
    </div>
  )
}


export default NavLink