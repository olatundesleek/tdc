import Head from "next/head";


import Web3 from "web3";
import Navigation from "sections/Navigation";
import BannerTwo from "sections/BannerTwo";
import Banner from "sections/Banner";
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/Awards";
import UserMap from "sections/UserMap";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
import Stack from "sections/Stack";
import Faq from "sections/Faq";
import Footer from "sections/Footer";
import BannerThree from "sections/BannerThree";
import FavIcon from "assets/images/fav-icon.png";


import Nft from "../src/sections/Nft";
import { useEffect, useState } from "react";
import Influencers from "../src/sections/Influencers/Influencers";
import RoadMap from "../src/sections/RoadMap/RoadMap";
import HowHigh from "../src/sections/HowHigh/HowHigh";
// import Homepage from "../src/components/Homepage/Homepage";
import Link from "next/link";
import logoImage from "assets/images/tdclogo.png";

const Home = () => {
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

  return (<>
   
      <Head>
        <title>The Dogg Coin | The Power of Deflationary Tokenomics</title>
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
        
      </Head>

  
      <div>
      <section class="showcase">
        <nav className="homepage-nav">
          <Link href="/">
            <a className="homepage-nav-a">
              <img className="logo-image" src={logoImage} />
            </a>
          </Link>
        </nav>
        <div class="video-container">
          <video src="/video/snoopbackground.mp4" autoPlay loop></video>
        </div>
        <div class="content">
          <Link href="/Roadmap">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              ROAD MAP
            </button>
          </Link>
          <Link href="/Tokenomics">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
             TOKENOMICS
            </button>
          </Link>
          <Link href="/Presale">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              BUY PRESALE
            </button>
          </Link>
        </div>
      </section>{" "}
    </div>
      {/* <BannerThree /> */}
      {/* <CoinFund connection={isConnected} userAccount={userAccount} /> */}
      {/* <Navigation
        load={loadAccount}
        logout={logoutAccount}
        connection={isConnected}
      /> */}
    
    </>
  );
};

export default Home;
