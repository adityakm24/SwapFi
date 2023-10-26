import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Swap-removebg.png";
import styles from "../assets/styles/UnifiedNavbar.module.css";
import { Lato } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";



const UnifiedNavbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/landing">
          <Image src={Logo} alt="Logo" width={90} height={50} />
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/swap" className={router.pathname === "/swap" ? styles.activeLink : ""}>Swap</Link>
        </li>
        <li>
          <Link href="/tokens" className={router.pathname === "/tokens" ? styles.activeLink : ""}>Tokens</Link>
        </li>
        <li>
          <Link href="/pools" className={router.pathname === "/pools" ? styles.activeLink : ""}>Pools</Link>
        </li>
      </ul>
      <div className={styles.button}>
      <ConnectButton showBalance={false} />
      </div>
    </nav>
  );
};


export default UnifiedNavbar;
