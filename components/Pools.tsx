import UnifiedNavbar from "./UnifiedNavbar";
import React, { useState } from "react";
import styles from "../assets/styles/Pools.module.css";

const Pools: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className={styles.head}>
        <h1>Pools</h1>
        <div className={styles.controlsContainer}>
          <div className={styles.customDropdown}>
            <select id="options" value={selectedOption} onChange={handleOptionChange}>
              <option value="">More</option>
              <option value="migrateV2">Migrate V2</option>
              <option value="liquidity">Liquidity</option>
            </select>
          </div>
          <button className={styles.newPositionButton}>+ New Position</button>
        </div>
      </div>
      <div className={styles.rectangle}>
        <p className={styles.centeredText}>
          Your active V3 liquidity positions will appear here.
        </p>
      </div>
    </div>
  );
};

export default Pools;
