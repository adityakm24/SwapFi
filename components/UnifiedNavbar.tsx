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
        <Link href="./landing"> 
        <Image src={Logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="./swap">Swap</Link>
        </li>
        <li>
          <Link href="./tokens" >Tokens</Link>
        </li>
        <li>
          <Link href="./pools">Pools</Link>
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
