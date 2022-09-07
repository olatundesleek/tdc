import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerThree from 'sections/BannerThree'
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

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  // neonCursor({
  //   el: document.getElementById('app'),
  //   shaderPoints: 16,
  //   curvePoints: 80,
  //   curveLerp: 0.5,
  //   radius1: 5,
  //   radius2: 30,
  //   velocityTreshold: 10,
  //   sleepRadiusX: 100,
  //   sleepRadiusY: 100,
  //   sleepTimeCoefX: 0.0025,
  //   sleepTimeCoefY: 0.0025
  // })
  return (
    <>
    // <ThemeProvider theme={theme}>
      <Head>
        <title>Cryptik | Next gentrations react next landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      // {/* <GlobalStyle /> */}
      <div id="app">
  <div id="hero">
    <h1>The Dogg<br/>Coin</h1>
    <a target="_blank" href="https://github.com/klevron/threejs-toys">github/threejs-toys</a>
  </div>
</div>

      {/* <Navigation /> */}
      {/* <BannerThree /> */}
      {/* <Service /> */}
      {/* <CoinFund /> */}
      {/* <About /> */}
      {/* <Awards /> */}
      {/* <UserMap /> */}
      {/* <Wallet /> */}
      {/* <Statistics /> */}
       {/* <Faq /> */}
      {/* <Stack /> */}
      {/* <Footer /> */}
    // </ThemeProvider>
    </>
  );
};

export default Home;