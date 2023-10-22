import React, { useState } from "react";
import styles from "../assets/styles/Tokens.module.css";

const Tokens = () => {
  const [isVolumeAscending, setIsVolumeAscending] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const tokenData = [
    { id: 1, name: "Ether ETH", price: "$1,605.14", change: "3.98%", tvl: "$1.1B", volume: "$9.8B" },
    { id: 2, name: "Xdc", price: "$2009", change: "2.98%", tvl: "$3.1B", volume: "$3.8B" },
    { id: 3, name: "doggy", price: "$9009", change: "19.98%", tvl: "$9.1B", volume: "$1.8B" },
    { id: 4, name: "yes", price: "$3009", change: "10.98%", tvl: "$1.1B", volume: "$10.8B" }
  ];

  const sortedTokens = [...tokenData]
    .filter(token => token.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (isVolumeAscending) {
        return parseFloat(a.volume.slice(1)) - parseFloat(b.volume.slice(1));
      } else {
        return parseFloat(b.volume.slice(1)) - parseFloat(a.volume.slice(1));
      }
    });

  return (
    <div className={styles.header}>
      <h1>Top tokens on swapfi</h1>
      <div className={styles.filters}>
          <select className={styles.dropdown}>
            <option value="ethereum">Ethereum</option>
            <option value="other">Other</option>
          </select>
          <select className={styles.dropdown}>
            <option value="1D">1D</option>
            <option value="1W">1W</option>
            <option value="1M">1M</option>
          </select>
          <input 
            type="text" 
            placeholder="Filter tokens" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className={styles.searchBar} 
          />
        </div>
      <div className={styles.pageContainer}>
        <div className={styles.tokensContainer}>
          <div className={styles.tokenRow}>
            <div>#</div>
            <div>Token name</div>
            <div>Price</div>
            <div>Change</div>
            <div>TVL</div>
            <div>
              Volume 
              <button className={styles.sortToggle} onClick={() => setIsVolumeAscending(!isVolumeAscending)}>
                {isVolumeAscending ? '▼' : '▲'}
              </button>
            </div>
          </div>
          {sortedTokens.map((token, index) => (
            <div key={token.id} className={styles.tokenRow}>
              <div>{index + 1}</div> 
              <div>{token.name}</div>
              <div>{token.price}</div>
              <div className={styles.positive}>{token.change}</div>
              <div>{token.tvl}</div>
              <div>{token.volume}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokens;
