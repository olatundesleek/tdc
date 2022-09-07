import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import BannerImage from "assets/images/banners/banner-one/banner-one-thumb.svg";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import BannerWrapper from "./banner.style";

const Banner = () => {
  return (
    <BannerWrapper>
      <img
        src={particleTopLeft}
        className="section__particle top-left"
        alt="Triple Shiba particles"
      />
      <img
        src={particleUnderLogo}
        className="section__particle two"
        alt="Triple Shiba particles"
      />
      <img
        src={prticleTopRight}
        className="section__particle top-right"
        alt="Triple Shiba particles"
      />
      <img
        src={particleBottomLeft}
        className="section__particle bottom-left"
        alt="Triple Shiba particles"
      />
      <img
        src={particleBottomRight}
        className="section__particle bottom-right"
        alt="Triple Shiba particles"
      />
      <Container>
        <Row>
          <Col className="lg-8 xs-12">
            <Box className="banner-content">
           
      
              <Box className="banner-btn">
            
                <Link href="/video/howtobuy.mp4">
                  <a className="btn btn-fill" target="_blank">How To Buy</a>
                </Link>
                <Link href="/pdf/whitepaper.pdf">
                  <a className="btn" target="_blank">White Paper</a>
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
       
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
