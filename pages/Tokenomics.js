import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Statistics from "../src/sections/Statistics"

import logoImage from "assets/images/tdclogo.png";
import wallpaperImage from "assets/images/snoopwallpaper2.jpg";
import Link from "next/link";
import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Tokenomics = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <title>The Dogg Coin | Tokenomics</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />
     
     
     
      <div className="tokenomics-container">
     <section class="tokenomics-div">
        <nav className="tokenomics-nav">
          <Link href="/">
            <a className="homepage-nav-a">
              <img className="logo-image" src={logoImage} />
            </a>
          </Link>
        </nav>
    
      <Statistics/>
       
     
   
      </section>
    
    
    
      </div>
      
     

    </ThemeProvider>
  );
};

export default Tokenomics;