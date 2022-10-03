import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";
import { Flex, Progress } from "@chakra-ui/react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import { IoIosArrowDown } from "react-icons/io";
import Text from "reusecore/Text";
import fundsBg from "assets/images/funds-bg.png";
import binanceLogo from "assets/images/binancelogo.png";
import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";
import Exchange from "../../components/Exchange/Exchange";


const launchDate = new Date(2022, 3, 230).getTime() / 1000;
const todayDate = new Date().getTime() / 1000;
const timerlaunch = launchDate - todayDate;

const CoinFund = ({ connection, userAccount }) => {
  const settings = {
    count: timerlaunch,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap",
  };

  return (
    <Box className="CoinFund">
      <Box className="balldiv">
        <img classname="meta-ball" src={fundsBg} />
      </Box>
      <CoinFundWrapper id="token">
        <Container>
          <Row>
            <Col className="lg-6 md-12 ">
              <Box className="coin-fund-content-left">
                <Box className="ourJourney">
                  <Link href="/Roadmap">
                    <Heading className="journey-text">
                    JOIN OUR <span className="journey-span">$10USD</span> ROADMAP
                    </Heading>
                  </Link>
                </Box>
                <Flex className="journey-text-line-container">
                  <Flex className="journey-text-line"></Flex>
                </Flex>
                <Flex justifyContent="center">
                  <IoIosArrowDown className="arrow-down" />
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  marginTop="30px"
                >
                  <Box>
                    <img className="presale-icon" src={binanceLogo} />
                  </Box>
                  <Box>
                    <p className="presale-Text">
                      Presale price - 1 $DOGG -{" "}
                      <span className="presale-span">0.0054 bnb</span>
                    </p>
                    <p className="listing-text">
                      Listing price - 1 $DOGG -{" "}
                      <span className="listing-span"> 0.039 bnb</span>
                    </p>
                  </Box>
                </Flex>
                <Exchange
                  connectionState={{ connection }}
                  userAccount={userAccount}
                />

                {/* <Box className="btn-wrapper">
                <Link href="#">
                  <a className="btn btn-fill">Buy Token</a>
                </Link>
              </Box> */}
              </Box>
            </Col>
            <Col className="lg-6 md-12 countdown-wrap">
              <Box className="countdown-wrapper">
                <Text> Last moment to grab the COIN </Text>
                <Text className="listing-text"> (CONCLUDING PRESALE ROUND) </Text>
                
                <CountdownTimer {...settings} />
              </Box>
              {/* <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$3,349,500</Text>
              </Box>
              <Text as="span">$15,000,931</Text>
            </Box> */}
              <Box className="progressbar">
              <Text className="raised" as="span">930 BNB</Text>


              <section>
            <article>
             
                <div class="chart">
                    <div class="bar bar-75 ">
                        <div class="face top">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-0">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face floor">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-a"></div>
                        <div class="face side-b"></div>
                        <div class="face side-1">
                            <div class="growing-bar"></div>
                        </div>
                    </div>
                </div>
              
            </article>
        </section>
        <Text className="totaltoraise" as="span">3715.10 BNB</Text>
              </Box>


             
              
             

    
            </Col>
          </Row>
        </Container>
      </CoinFundWrapper>
    </Box>
  );
};

export default CoinFund;
