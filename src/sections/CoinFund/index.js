import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";
import { Flex, Progress } from "@chakra-ui/react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import { IoIosArrowDown } from "react-icons/io";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import fundsBg from "assets/images/funds-bg.png";
import pancakeSwap from "assets/images/pancakeswap.png";
import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";
import Exchange from "../../components/Exchange/Exchange";
import RoadMap from "../RoadMap/RoadMap";

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
                  <Link href="#Roadmap">
                    <Heading className="journey-text">
                      OUR ROADMAP TO <span className="journey-span">$1USD</span>
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
                    <img className="presale-icon" src={pancakeSwap} />
                  </Box>
                  <Box>
                    <p className="presale-Text">
                      Presale rate - 1 TDC -{" "}
                      <span className="presale-span">0.000001 bnb</span>
                    </p>
                    <p className="listing-text">
                      Listing rate - 1 TDC -{" "}
                      <span className="listing-span"> 0.00001 bnb</span>
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
                <Text className="listing-text"> (Final Round) </Text>
                
                <CountdownTimer {...settings} />
              </Box>
              {/* <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$3,349,500</Text>
              </Box>
              <Text as="span">$15,000,931</Text>
            </Box> */}
              <Box className="progressbar">
                <Progress 
                  value={40}
                  hasStripe
                  isAnimated
                  size="lg"
                  // colorScheme="pink"
                  color={"black"}
                  height="24px"
                  borderRadius="10px"
                />
              </Box>
              <Flex justifyContent="space-between">
                <Text as="span">240.10 BNB</Text>

                <Text as="span">950.30 BNB</Text>
              </Flex>

              <Box className="payment-getway">
                <Text as="span">
                  {" "}
                  <FaBitcoin />{" "}
                </Text>
                <Text as="span">
                  {" "}
                  <FaCcMastercard />{" "}
                </Text>
                <Text as="span">
                  {" "}
                  <FaCcVisa />{" "}
                </Text>
                <Text as="span">
                  {" "}
                  <FaCcDiscover />{" "}
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </CoinFundWrapper>
    </Box>
  );
};

export default CoinFund;
