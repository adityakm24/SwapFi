// pages/index.js

import React from "react";
import Dashboard from "../components/Dashboard";
import NFTs from "../components/NFTs";
import Pools from "../components/Pools";
import Swap from "../components/Swap";
import Tokens from "../components/Tokens";
import UnifiedNavbar from "@/components/UnifiedNavbar";

const MyApp = () => {
  return (
    <div>
      <Swap />
      <Tokens />
      <NFTs />
      <Pools />
    </div>
  );
};

export default MyApp;
