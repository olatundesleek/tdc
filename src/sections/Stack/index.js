import React from "react";
import Link from "next/link";
import listingImg from "../../assets/images/listings.png";

import { SectionTitle } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import data from "assets/data/stack";
import StackSectionWrapper from "./stack.style";

const Stack = () => {
  return (
    <StackSectionWrapper>
      <Box className="Stack-Wrapper">
        <Container>
          <Row className="listing-row">
            <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
              <SectionTitle>
                <Heading> Upcoming Listing</Heading>
                {/* <Text>
              RjtQQ8H6L5XFg8QaAgHx7LEuU63V7RDVfirlP05k5Fm8EEPArSDVRiOrautYjy54PNgEJ78XmHLF4E4CAVyE1NwhNo5sVJK6H
                </Text> */}
                <img src={listingImg} className="listing-img" />
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-8 offset-md-2 xs-12">
              <Box className="language-image">
                {/* {data.stack.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a>
                      <Image src={item.imageSrc} alt={item.name} />
                    </a>
                  </Link>
                ))} */}
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StackSectionWrapper>
  );
};

export default Stack;
