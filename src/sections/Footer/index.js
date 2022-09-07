import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

import ThripleShibaFooterLogo from "assets/images/logo-white.png";
import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        {/* <Subscribe /> */}
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
                <Image
                  src={ThripleShibaFooterLogo}
                  alt="Triple Shiba footer logo"
                />

                <Box className="contact-info">
                  {/* <Link href="">
                    <a>
                      {" "}
                      <FaPhoneAlt /> contact@TripleShiba.com{" "}
                    </a>
                  </Link> */}
                  {/* <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> +88 12345 697858{" "}
                    </a>
                  </Link> */}
                  <Link href="">
                    <a>
                      <ImLocation className="locationIcon" /> 100 Beach Road
                      16-05 Shaw Tower, Singapore 189702{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            {/* <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Service</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>Web Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Web Development</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>UXUI Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Graphics Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Software development</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Content</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">About Us</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>About Us</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Work Portfolio</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Team</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Plan & Pricing</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Content</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Company News</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col> */}
            <Col className="lg-3 sm-6">
              {/* <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text>100 Beach Road 16-05 Shaw Tower, Singapore 189702</Text>
              </Box> */}
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a> {item.icon} </a>
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; Triple Shiba | All right reserved 2022</Text>
                <Text as="span">
                  Designed By{" "}
                  <Link href="#">
                    <a>Triple Shiba Dev Team</a>
                  </Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
