import React from "react";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialLinkedin,
} from "react-icons/ti";

import Heading1 from "reusecore/Heading";


import statisticsImage1 from "assets/images/token1.png";
import statisticsImage2 from "assets/images/token2.png";
import statisticsImage3 from "assets/images/token3.png";
import supplyImg from "assets/images/allocation.png";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Button from "reusecore/Button";
import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/Blog-sidebar";

import BlogThumb from "assets/images/snoopdoggoffice.jpg";



import BlogPageWrapper from "./blogSingle.style";

const BlogSinglePage = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="What is Dogg Coin?" />
      <Box className="single-post-wrapper">
        <Container>
          <Row>
            <Col className="xs-12 lg-8">
              <Row>
                <Col className="xs-12">
                  <Box className="single-post-block">
                    <Box className="post-thumb-block">
                      <Image src={BlogThumb} alt="ThripleShiba blog page" />
                      <Box className="post-meta">
                        <Text as="span">
                          <Text as="em"> 15 </Text> SEP
                        </Text>
                      </Box>
                    </Box>
                    <Box className="post-content-block">
                      <Heading className="post-title">
                      Snoop Dogg has always been an early adopter!
                      </Heading>
                      <Text className="entry-one">
                      Back in 2013, when Instagram had over a billion fewer users than it does today, and had recently come under new ownership of Facebook, Snoop Dogg joined a $50 million investment round to fund what we all know today as the $DOGGCOIN.
                      </Text>
                      <Text className="entry-two">
                      Today, Snoop Dogg has turned his attention to the lucrative world of Stream-To-Earn!.

His recently-announced plan to turn Death Row into an ‘NFT label‘ would have come as no surprise to anyone following the rap legend’s cryptocurrency interests over the past 12 months. $DOGGCOIN has since then generated over $250,000 in retail investments as investors are catching the STREM-TO-EARN train and making money fast!
                      </Text>
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
                      <Heading className="post-title">
                      $DOGGCOIN TOKENOMICS
                      </Heading>
                      <Text className="entry-two">
                      DOGG COIN utilizes the $DOGG token native to the Doggcoin ecosystem. $Dogg is used to pay for transaction fees, staking, asset transfers, and to run smart contracts.

The total supply for $DOGG is calculated as the sum of total supply on the Doggcoin ecosystem. It’s interesting to note that all $DOGG tokens (1 million) had been pre-mined prior to public sale.

Breakdown of ecosystem-wide token allocation can be seen below: 
                      </Text>
                      <Container>
          <Row className="funds-distribution">
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Funds Allocation</Heading1>
                <Image
                  src={statisticsImage1}
                  alt="cryptic statistics image"
                  className="dist-img"
                />
              </Box>
            </Col>
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Token Distribution</Heading1>
                <Image
                  src={statisticsImage2}
                  alt="cryptic statistics image"
                  className="dist-img"
                />
              </Box>
            </Col>
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Token Distribution</Heading1>
                <Image
                  src={statisticsImage3}
                  alt="cryptic statistics image"
               className="dist-img"
                />
              </Box>
            </Col>
          </Row>
        </Container>
                      <Text className="entry-four">
                      The following section goes over the key use cases of $DOGGCOIN:

The $DOGG token is considered to be a technical standard for the issuance and implementation of stream earnings on the Doggcoin ecosystem. $DOGG tokens will be used as currency to payout and pay for transactions and staking. The Doggcoin standard sets out basic yet essential features for streaming earnings issued on the Doggcoin ecosystem. Upon launch $DOGG TOKENS will be available on Exchanges like Binance and Pancakeswap for easy resale/profits.

$DOGG tokens are also supported by hardware wallets such as Ledger Nano X and Ledger Nano S. 

Some notable functions:
                      </Text>
                      <ul className="tdcfunctions">
                        <li>Pay for trading fees on Binance Dex</li>
                        <li>Earn from millions of music streaming nodes.</li>
                        <li>Pay for Transaction fees</li>
                        <li>Pay for Goods and Services online and in-store </li>
                        <li>Staking and earning rewards and much more</li>
                        </ul>
                        <Heading className="post-title">
                        The Founding Team
                      </Heading>
                      <Text className="entry-two">
                      400 Thousand $DOGG (40% supply) accrued over the span of 3 years. 

<p><b>‍Angel Investors:</b></p>

100 Thousand $DOGG (10% of supply) immediate access; not vested. 

<p><b>Public Auction: </b></p>

500 Thousand $DOGG (50% of supply) are all available for presale on www.thedoggcoin.com , they are currently going for $2 per $DOGG coin (presale price) and $10 per $DOGG coin (Binance Listing Price)

The total circulating supply of the $Dogg Token can be seen below: 
                      </Text>
                      <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Token Distribution</Heading1>
                <Image
                  src={supplyImg}
                  alt="cryptic statistics image"
                  className="supply-img"
                />
              </Box>
            </Col>
                      <Heading className="post-title">
                      $DOGG COIN Token Burn:
                      </Heading>
                      <Text className="entry-two">
                      Doggcoin schedules quarterly $Dogg burns, to reduce the supply of $DOGGCOIN, resulting in a forced value/price increase. Quarterly trading volume decides how much $Doggcoin is burned every quarter. The quarterly burn schedule will continue until a total of 300,000 $Doggcoin is destroyed. $DOGGCOIN will list at $10 on major exchanges.

Buy into $DOGGCOIN at the the cheapest presale price now at  <Link href="/presale"><a className="linktobuy">www.thedoggcoin.com/presale</a></Link>
                      </Text>
                      <Heading className="post-title">
                      PROFITABLE PRESALE/LISTING PRICE MARGIN:
                      </Heading>
                      <Text className="entry-two">
                      This is perhaps the most juicy feature of the $DOGGCOIN project, as the development team are giving early bird investors, as well as short-term traders, a chance to benefit from the projects liquidity and marketing power!

within the time-frame between the ongoing PRESALE and LAUNCHING (on binance and pancakeswap), presale holders get a fixed profit between the presale price of $2 and the listing price of $10 , this is a “hot cake” for short term traders and early birds.

Buy into $DOGGCOIN at the the cheapest presale price now at <Link href="/presale"><a className="linktobuy">www.thedoggcoin.com/presale</a></Link>
                      </Text>
                      <Heading className="post-title">
                      STREAM TO EARN:
                      </Heading>
                      <Text className="entry-two">
                      According to statistics snoop doog music earns an average $143 Million every year on in-streams alone! across many social platforms, $DOGGCOIN aim is to merge music and cryptocurrency using decentralised Music multi-node system to key into these earnings; turning all snoopdogg fans and investors into 8 figure earners.
it’s simple!
you invest, Nodes do the hard work, you cashout, Simple Passive income!

Buy into $DOGGCOIN at the the cheapest presale price now at <Link href="/presale"><a className="linktobuy">www.thedoggcoin.com/presale</a></Link>
                      </Text>
                    </Box>
                    <Box className="post-info-block">
                      <Box className="tags">
                        <Link href="#">
                          <a>#crypto</a>
                        </Link>
                        <Link href="#">
                          <a>#Doggcoin</a>
                        </Link>
                        <Link href="#">
                          <a>#Bitcoin</a>
                        </Link>
                      </Box>
                      {/* <Box className="share">
                        <Link href="#">
                          <a>
                            <TiSocialFacebook />
                          </a>
                        </Link>
                        <Link href="#">
                          <a>
                            <TiSocialTwitter />
                          </a>
                        </Link>
                    
                      </Box> */}
                    </Box>

            
      
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col className="sm-12 lg-4">
              {/* <Sidebar /> */}
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  );
};

export default BlogSinglePage;
