import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import binanceLogo from "../../assets/images/influencers/binance-logo-1.png";
import bitboyLogo from "../../assets/images/influencers/bitboycrytpo.png";
import bloombergLogo from "../../assets/images/influencers/Bloomberg_Media_stack_blk_transp.png";
import coinbureauLogo from "../../assets/images/influencers/coin bureau.png";
import coinGecko from "../../assets/images/influencers/coin gecko logo.png";
import coinMarket from "../../assets/images/influencers/coinmarket.png";
import cryptopia from "../../assets/images/influencers/Cryptopia.png";
import frenchMontana from "../../assets/images/influencers/french montana logo.png";
import gemini from "../../assets/images/influencers/gemini.png";
import jbalvin from "../../assets/images/influencers/j balvin.png";
import nfl from "../../assets/images/influencers/National_Football_League_logo.png";
import tripleshibaarmy from "../../assets/images/influencers/tripe shiba army.png";

import shibaHead from "../../assets/images/just head.png";
function Influencers() {
  return (
    <Box id="Influencers">
      <Flex justifyContent="center">
        <img src={shibaHead} className="team-head-logo" />
      </Flex>
      <Text
        textAlign="center"
        fontSize="80px"
        fontFamily="Bebas Neue"
        letterSpacing="10px"
        lineHeight="50px"
      >
        TEAM OF
      </Text>
      <Text
        textAlign="center"
        fontSize="30px"
        color="#feae00"
        fontFamily="Bebas Neue"
        letterSpacing="5px"
        lineheight="20px"
      >
        MEDIA INFLUENCERS
      </Text>
      <div class="d-md-flex justify-content-center align-items-center community-hero overflow-hidden">
        <div class="container">
          <div class="row g-md-5 g-3 pt-4">
            <div class="col-lg-6 col-12">
              <div class="h-100 d-flex align-items-center">
                <div>
                  <h1 class="display-4 mb-4 community-heading">
                    Triple Shiba Community
                  </h1>
                  {/* <p class="lead">
                    Your text description goes here lorem ipsum dolor sit amet
                    with a good call to action
                  </p> */}
                  {/* <a href="#" class="btn btn-primary">
                    Companies
                  </a>
                  <a href="#" class="btn btn-secondary">
                    People
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="community-slider">
                <div class="row gx-md-4 gy-md-5 gx-3 gy-4">
                  <div class="col-4">
                    <img
                      src={bitboyLogo}
                      alt="..."
                      class="rounded img-fluid shadow influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={bloombergLogo}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-1s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={coinbureauLogo}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-2s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={coinMarket}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-3s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={coinGecko}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-4s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={binanceLogo}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-5s influencer-img"
                    />
                  </div>
                </div>
                <div class="row gx-md-4 gy-md-5 gx-3 gy-4">
                  <div class="col-4">
                    <img
                      src={cryptopia}
                      alt="..."
                      class="rounded img-fluid shadow"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={frenchMontana}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-1s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={gemini}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-2s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={jbalvin}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-3s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={nfl}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-4s influencer-img"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      src={tripleshibaarmy}
                      alt="..."
                      class="rounded img-fluid shadow animate__delay-5s influencer-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Influencers;
