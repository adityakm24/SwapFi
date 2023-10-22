// pages/index.js

import React from "react";
import Pools from "../components/Pools";
import Swap from "../components/Swap";
import Tokens from "../components/Tokens";
import UnifiedNavbar from "@/components/UnifiedNavbar";

const MyApp = () => {
  return (
    <div>
      <Swap />
      <Tokens />
      <Pools />
    </div>
  );
};

export default MyApp;
