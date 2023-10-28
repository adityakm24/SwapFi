import React, { useState } from "react";
import styles from "../assets/styles/Tokens.module.css";

const Tokens = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to hide the loading message when the iframe is loaded
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
[]
  return (
    <div className={styles.header}>
      <h1>Top tokens on swapfi</h1>
      {isLoading && <p className={styles.loading}>Loading...</p>}
      <div className={styles.holds} style={{ border: "none", overflow: "hidden" }}>
        <iframe
          src="https://tokens-vercel.vercel.app/"
          width="100%"
          height="600" // Set the height according to your requirements
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
};

export default Tokens;
