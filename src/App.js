// import { ethers } from 'ethers';
// import Web3 from 'web3';
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [WalletAddress, setwalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  // const [AccountBalance, setuserBalance] = useState(null);
  const [balance, setBalance] = useState(null);
  

  async function requestAccount() {
    if (window.ethereum) {
      console.log("metamask is connected");
      setIsConnected(true);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setwalletAddress(accounts[0]);

        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const balance = await provider.getBalance(accounts[0]);
        // setBalance(ethers.utils.formatEther(balance));
        // console.log(accounts[0]);
      } catch (Error) {
        console.log("error while connecting metamask");
        setIsConnected(false);
      }
    } else {
      console.log("please install metamask");
    }
  }

  // const requestBalance = (address) => {
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"],
  //     })
  //     .then((balance) => {
  //       setuserBalance(balance);
  //     });
  // };

  // useEffect(() => {
  //   requestBalance();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
       
   
      {/* Your other JSX elements */}
    
        {isConnected ? (
          <button onClick={requestAccount}> MetaMask connected {balance} </button>
          ) : (
            <button onClick={requestAccount}> please Connect MetaMask </button>
            )}
        {/* <button onClick={requestBalance}> MetaMask balace</button> */}

        <br></br>
        <br></br>
        <h3>WalletAddress:{WalletAddress} </h3>
        <h3> balance:{balance} </h3>
      </header>
    </div>
  );

}

export default App;
