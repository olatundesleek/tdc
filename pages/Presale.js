import Head from "next/head";

import { ThemeProvider } from "styled-components";
import Web3 from "web3";

import CoinFund from "sections/CoinFund";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";

import { useEffect, useState } from "react";

// import RoadMap from "../src/sections/RoadMap/RoadMap";

import Link from "next/link";

import logoImage from "assets/images/tdclogo.png";


const Presale = () => {
  // declaring application state
  const [userAccount, setUserAccount] = useState();
  const [userBalance, setUserBalance] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  // persisting connected state upon refresh by storing the current state in the local storage
  useEffect(() => {
    const connectState = localStorage.getItem("isConnected");

    if (connectState === "true") {
      setIsConnected(true);
      // setIsConnected(false);
    }
  }, []);

  // logging out account
  // setting connection state to false
  const logoutAccount = () => {
    localStorage.setItem("isConnected", false);
    setIsConnected(false);
  };

  // loading account by user action from connect wallet button
  async function loadAccount() {
    // checking to know if metamask is installed before connecting account,alerts a message if not installed
    if (window.ethereum == undefined) {
      alert("please install metamask / Trust wallet");
    } else {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserAccount(accounts[0]);
        setIsConnected(true);

        localStorage.setItem("isConnected", true);
        localStorage.setItem("activeAccount", accounts[0]);
      } catch (error) {}
    }
  }

  return (
   <>
      <Head>
        <title>The Dogg Coin | Presale </title>
        <meta
          name="The Dogg Coin"
          content="The Power of Deflationary Tokenomics"
        />
        <link rel="apple-touch-icon" href={FavIcon} />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href=""/>
        
      </Head>

      {/* <GlobalStyle /> */}
      {/* <Navigation
        load={loadAccount}
        logout={logoutAccount}
        connection={isConnected}
      /> */}
      <div className="presale-container">
     <section class="showcase-presale">
        <nav className="homepage-nav">
          <Link href="/">
            <a className="homepage-nav-a">
              <img className="logo-image" src={logoImage} />
            </a>
          </Link>
        </nav>
        <div class="video-container">
      
        </div>
   
      </section>
  
      <CoinFund connection={isConnected} userAccount={userAccount} />
   
      </div>
      </>
  );
};

export default Presale;
