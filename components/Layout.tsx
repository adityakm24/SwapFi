import React, { PropsWithChildren } from "react";
import UnifiedNavbar from "./UnifiedNavbar"; // Import the UnifiedNavbar component

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <UnifiedNavbar />
      {children}
    </>
  );
};

export default Layout;
