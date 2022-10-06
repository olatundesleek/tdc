// import React from "react";
import { Heading } from "@chakra-ui/react";
import { Container, Row, Col } from "reusecore/Layout";

import Box from "reusecore/Box";
import Heading1 from "reusecore/Heading";
import Image from "reusecore/Image";

import statisticsImage1 from "assets/images/token1.png";
import statisticsImage2 from "assets/images/token2.png";
import statisticsImage3 from "assets/images/token3.png";

import StatisticsSectionWrapper from "./statistics.style";

const Statistics = () => {
  return (
    <StatisticsSectionWrapper id="statistics">
      <Heading
        className="tokenomics-heading"
        display="flex"
        flexDirection="center"
        justifyContent="center"
      >
        TOKENOMICS
      </Heading>
      <Box className="statistics-wrapper">
        <Container>
          <Row className="funds-distribution">
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Funds Allocation</Heading1>
                <Image
                  src={statisticsImage1}
                  alt="cryptic statistics image"
                  className="distribution-image"
                />
              </Box>
            </Col>
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Token Distribution</Heading1>
                <Image
                  src={statisticsImage2}
                  alt="cryptic statistics image"
                  className="distribution-image"
                />
              </Box>
            </Col>
            <Col className="lg-3 md-6 sm-12 xs-12">
              <Box className="statistics-image">
                <Heading1 as="h2">Token Distribution</Heading1>
                <Image
                  src={statisticsImage3}
                  alt="cryptic statistics image"
                  className="distribution-image"
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
