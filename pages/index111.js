import Head from "next/head";

import { ThemeProvider } from "styled-components";
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
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import Nft from "../src/sections/Nft";
import { useEffect, useState } from "react";
import Influencers from "../src/sections/Influencers/Influencers";
import RoadMap from "../src/sections/RoadMap/RoadMap";
import HowHigh from "../src/sections/HowHigh/HowHigh";

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

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Triple Shiba | The Power of Deflationary Tokenomics</title>
        <meta
          name="Triple Shiba"
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

      <GlobalStyle />
      <Navigation
        load={loadAccount}
        logout={logoutAccount}
        connection={isConnected}
      />
      {/* <BannerThree /> */}
      <CoinFund connection={isConnected} userAccount={userAccount} />
      <BannerTwo />
      <Banner/>
      <HowHigh />

      <About />
      <Nft />
      <Statistics />

      <Influencers />
      <Wallet />
      {/* <Awards /> */}
      <UserMap />

      <Faq />
      <RoadMap />
      <Stack />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
