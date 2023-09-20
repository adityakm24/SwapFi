// SearchButton.tsx
import React, { useState } from "react";
import styles from "../assets/styles/SearchButton.module.css";

const SearchButton: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.input}
        placeholder="Search tokens and NFT collections"
      />
      {searchTerm && (
        <div className={styles.result}>Search term: {searchTerm}</div>
      )}
    </div>
  );
};

export default SearchButton;
