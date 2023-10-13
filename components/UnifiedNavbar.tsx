
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo-social.png";
import styles from "../assets/styles/UnifiedNavbar.module.css";
import { Lato } from 'next/font/google'

import { ConnectButton } from '@rainbow-me/rainbowkit';

const UnifiedNavbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="200"
            height="79"
            className={styles.logo}
            priority
          />
        </Link>
        <div className={styles.links}>
          <ul className="hidden sm:flex">
            <Link href="/swap">
              <li
                className={`${styles.navItem} uppercase hover:border-b text-xl`}
              >
                Swap
              </li>
            </Link>
            <Link href="/tokens">
              <li
                className={`${styles.navItem} uppercase hover:border-b text-xl`}
              >
                Tokens
              </li>
            </Link>
            <Link href="/nfts">
              <li
                className={`${styles.navItem} uppercase hover:border-b text-xl`}
              >
                NFTs
              </li>
            </Link>
            <Link href="/pools">
              <li
                className={`${styles.navItem} uppercase hover:border-b text-xl`}
              >
                Pools
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className={`${styles.input}`}
            placeholder="Search tokens and NFT collections"
          />
        </div>

        <div>
        <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default UnifiedNavbar;
