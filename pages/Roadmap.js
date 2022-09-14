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
import RoadMap from "../src/sections/RoadMap/RoadMap";

const Roadmap = () => {
  return (
    <>
      <Head>
      <title>The Dogg Coin | Roadmap</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <div className="roadmap-container">
     <section class="tokenomics-div">
        <nav className="tokenomics-nav">
          <Link href="/">
            <a className="homepage-nav-a">
              <img className="logo-image" src={logoImage} />
            </a>
          </Link>
        </nav>
    
    
        <RoadMap/>
     
   
      </section>
    
    
    
      </div>
     
     

      
     
      </>
   
  );
};

export default Roadmap;