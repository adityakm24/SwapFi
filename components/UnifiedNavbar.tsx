import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo-social.png";
import styles from "../assets/styles/UnifiedNavbar.module.css";
import { Lato } from "next/font/google";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const UnifiedNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.button}>
        <ConnectButton/>
      </div>
    </nav>
  );
};

export default UnifiedNavbar;
