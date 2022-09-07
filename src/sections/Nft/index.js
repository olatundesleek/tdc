import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import { FaGooglePlay, FaApple } from "react-icons/fa";

import nftImage from "assets/images/nfts.png";

import AboutSectionWrapper from "./about.style";

const Nft = () => {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <Row>
          <Col className="lg-6 offset-lg-1 md-6 sm-12 xs-12">
            <Box className="about-right-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">Nft</Heading>
                </SectionBackground>

                <Text>coming soon</Text>
              </SectionTitle>

              <Box className="about-list">
                <Text as="span">65% Marketing.</Text>
                <Text as="span">10% Reserved Funding.</Text>
                <Text as="span">25% Founders and Team Management.</Text>
              </Box>
            </Box>
          </Col>
          <Col className=" lg-5 md-6 sm-12 xs-12">
            <Image
              src={nftImage}
              className="nft-image"
              alt="ThripleShiba Nft image"
            />
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default Nft;
