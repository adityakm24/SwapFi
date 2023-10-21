import React, { useState, useEffect } from "react";
import UnifiedNavbar from "./UnifiedNavbar";
import styles from "../assets/styles/Swap.module.css";

const Swap: React.FC = () => {
  const [payCoin, setPayCoin] = useState('ETH');
  const [receiveCoin, setReceiveCoin] = useState('Xdc');
  const [showPayModal, setShowPayModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoins, setFilteredCoins] = useState<string[]>([]);
  const closeModal = () => {
    setShowPayModal(false);
    setShowReceiveModal(false);
  };
  const availableCoins = ['ETH', 'Xdc', 'BTC', 'ADA', 'DOGE'];

  useEffect(() => {
    setFilteredCoins(availableCoins.filter(coin => coin.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm]);

  return (
    <div className={styles["swap-container"]}>
      <div className={styles["swap-panel"]}>
        <div className={styles["swap-header"]}>
          <button>Swap</button>
        </div>
        <div className={styles["swap-body"]}>
          <div className={styles["swap-section"]}>
            <label>You pay</label>
            <div className={styles["pay-input"]}>
              <input type="number" placeholder="0" />
              <button onClick={() => setShowPayModal(true)}>
                <span>{payCoin}</span>
                <span>▼</span>
              </button>
            </div>
          </div>
          <div className={styles["swap-section"]}>
            <label>You receive</label>
            <div className={styles["receive-input"]}>
              <input type="number" placeholder="0" />
              <button onClick={() => setShowReceiveModal(true)}>
                <span>{receiveCoin}</span>
                <span>▼</span>
              </button>
            </div>
          </div>
          <button className={styles["connect-button"]}>Connect wallet</button>
        </div>
      </div>
      {showPayModal && (
        <div className={styles["coin-modal"]}>
          <button className={styles["close-button"]} onClick={closeModal}>X</button>
          <input type="text" placeholder="Search for a coin" onChange={(e) => setSearchTerm(e.target.value)} />
          {filteredCoins.filter(coin => coin !== receiveCoin).map(coin => (
            <button key={coin} onClick={() => { setPayCoin(coin); closeModal(); }}>{coin}</button>
          ))}
        </div>
      )}
      {showReceiveModal && (
        <div className={styles["coin-modal"]}>
          <button className={styles["close-button"]} onClick={closeModal}>X</button>
          <input  type="text" placeholder="Search for a coin" onChange={(e) => setSearchTerm(e.target.value)} />
          {filteredCoins.filter(coin => coin !== payCoin).map(coin => (
            <button key={coin} onClick={() => { setReceiveCoin(coin); closeModal(); }}>{coin}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Swap;
