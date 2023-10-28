import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount, useNetwork } from "wagmi";
import UnifiedNavbar from "./UnifiedNavbar";
import styles from "../assets/styles/Swap.module.css";
import useIsMounted from "./hooks/useIsMounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faGear, faSearch, faExchangeAlt } from "@fortawesome/free-solid-svg-icons"; // Import the swap icon.

const Swap: React.FC = () => {
  const router = useRouter();
  const mounted = useIsMounted();
  const account = useAccount();
  

  const [payCoin, setPayCoin] = useState("ETH");
  const [receiveCoin, setReceiveCoin] = useState("XDC");
  const [payValue, setPayValue] = useState(0);
  const [receiveValue, setReceiveValue] = useState(0);
  const [showPayModal, setShowPayModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<string[]>([]);

  const [OWChainName, setOWChainName] = useState("");
  const [OAddress, setOAddress] = useState("");

  const closeModal = () => {
    setShowPayModal(false);
    setShowReceiveModal(false);
  };
  const iconStyle = {
    transform: "rotate(90deg)",
  };

  const availableCoins = ["ETH", "XDC", "BTC", "ADA", "DOGE"];

  const swapCoins = () => {
    const tempPayCoin = payCoin;
    const tempPayValue = payValue;
    setPayCoin(receiveCoin);
    setReceiveCoin(tempPayCoin);
    setPayValue(receiveValue);
    setReceiveValue(tempPayValue);
  };

  const getIconForCoin = (coin: string) => {
    switch (coin) {
      case "ETH":
        return "ethereum.png"; 
      case "BTC":
        return "bitcoin.png"; 
      case "ADA":
        return "ada.png"; 
      case "DOGE":
        return "dogecoin.png"; 
      case "XDC":
        return "xdc.png";
      default:
        return "";
    }
  };
  

  useEffect(() => {
    setFilteredCoins(
      availableCoins.filter((coin) =>
        coin.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className={styles.swapcontainer}>
      <div className={styles.swappanel}>
        <div className={styles.swapheader}>
          <button>Swap</button>
          <button className={styles.iconbtn}>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
        <div className={styles.swapbody}>
          <div className={styles.boxs}>
            <div>
              <div className={styles.swapsection}>
                <label>You pay</label>
                <div className={styles.payinput}>
                  <input
                    type="number"
                    placeholder="0"
                    value={payValue}
                    onChange={(e) => setPayValue(parseFloat(e.target.value))}
                  />
                  <button
                    className={styles.paycoin}
                    onClick={() => setShowPayModal(true)}
                  >
                    <div style={{ display: "flex", alignItems: "center", marginLeft:"-10px"}}>
    <img src={getIconForCoin(payCoin)} alt={payCoin} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                    <span>{payCoin}</span>                    
                    <span>▼</span>
                  </div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className={styles.ExButton} onClick={swapCoins}>
                <FontAwesomeIcon icon={faExchangeAlt} style={iconStyle} />              
                </button>
            </div>
            <div>
              <div className={styles.swapsection}>
                <label>You receive</label>
                <div className={styles.receiveinput}>
                  <input
                    type="number"
                    placeholder="0"
                    value={receiveValue}
                    onChange={(e) =>
                      setReceiveValue(parseFloat(e.target.value))
                    }
                  />
                  <button onClick={() => setShowReceiveModal(true)}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft:"-10px"}}>
    <img src={getIconForCoin(receiveCoin)} alt={receiveCoin} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
                    <span>{receiveCoin}</span>                    
                    <span>▼</span>
                  </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div><br></br></div>
          {mounted && account.isConnected ? (
            <button className={styles.swapButton}>Swap</button>
          ) : (
            <button className={styles.swapButtonDisb}>Connect wallet</button>
          )}
        </div>
      </div>
      {showPayModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.coinmodal}>
            <p>Select a coin</p>
            <button className={styles.closebutton} onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
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
                  className={styles.listbtn}
                  onClick={() => {
                    setPayCoin(coin);
                    closeModal();
                  }}
                >
                  <img src={getIconForCoin(coin)} alt={coin} style={{ width: "20px", height: "20px" , marginRight:"10px"}} />
                  {coin}
                </button>
              ))}
          </div>
        </div>
      )}
      {showReceiveModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.coinmodal}>
            <p>Select a coin</p>
            <button className={styles.closebutton} onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
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
                  className={styles.listbtn}
                  onClick={() => {
                    setReceiveCoin(coin);
                    closeModal();
                  }}
                >
                  <img src={getIconForCoin(coin)} alt={coin} style={{ width: "20px", height: "20px" , marginRight:"10px"}} />

                  {coin}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Swap;
