import React, { useState, useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";
import UnifiedNavbar from "./UnifiedNavbar";
import styles from "../assets/styles/Swap.module.css";

const Swap: React.FC = () => {
  const account = useAccount();
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
    <div className={styles.swapcontainer}>
      <div className={styles.swappanel}>
        <div className={styles.swapheader}>
          <button>Swap</button>
        </div>
        <div className={styles.swapbody}>
          <div className={styles.swapsection}>
            <label>You pay</label>
            <div className={styles.payinput}>
              <input type="number" placeholder="0" />
              <button className={styles.paycoin} onClick={() => setShowPayModal(true)}>
                <span>{payCoin}</span>
                <span>▼</span>
              </button>
            </div>
          </div>
            <div className={styles.swapsection}>
              <label>You receive</label>
              <div className={styles.receiveinput}>
                <input type="number" placeholder="0" inputMode="numeric" />
                <button onClick={() => setShowReceiveModal(true)}>
                  <span>{receiveCoin}</span>
                  <span>▼</span>
                </button>
              </div>
            </div>
          {account.isConnected ? (
            <button className={styles.swapButton}>Swap</button>
          ) : (
            <button className={styles.swapButtonDisb}>Connect wallet</button>
          )}
        </div>
      </div>
      {showPayModal && (
        <div className={styles.coinmodal}>
          <button className={styles.closebutton} onClick={closeModal}>
            X
          </button>
          <input
            type="text"
            placeholder="Search for a coin"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredCoins
            .filter((coin) => coin !== receiveCoin)
            .map((coin) => (
              <button
                key={coin}
                onClick={() => {
                  setPayCoin(coin);
                  closeModal();
                }}
              >
                {coin}
              </button>
            ))}
        </div>
      )}
      {showReceiveModal && (
        <div className={styles.coinmodal}>
          <button className={styles.closebutton} onClick={closeModal}>
            X
          </button>
          <input
            type="text"
            placeholder="Search for a coin"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredCoins
            .filter((coin) => coin !== payCoin)
            .map((coin) => (
              <button
                key={coin}
                onClick={() => {
                  setReceiveCoin(coin);
                  closeModal();
                }}
              >
                {coin}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Swap;
