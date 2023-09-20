// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/logo-social.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 shadow-x1 bg-black">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="200"
            height="79"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/swap">
              <li className="mr-10 uppercase hover:border-b text-xl">Swap</li>
            </Link>
            <Link href="/tokens">
              <li className="mr-10 uppercase hover:border-b text-xl">Tokens</li>
            </Link>
            <Link href="/nfts">
              <li className="mr-10 uppercase hover:border-b text-xl">NFTs</li>
            </Link>
            <Link href="/pools">
              <li className="mr-10 uppercase hover:border-b text-xl">Pools</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
