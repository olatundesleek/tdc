import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import UserMapImage from "assets/images/thriple-shibawallpaper2b.jpg";
import UserMapWrapper from "./userMap.style";

const UserMap = () => {
  return (
    <UserMapWrapper>
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Row>
            <Col className="sm-12 md-10 offset-md-1">
              <SectionTitle className="text-center">
                <Heading>More than 140k holders worldwide use</Heading>
                <Text>
                  The Triple-shiba project boasts of 250 Bulls who double as
                  hodlers, goal is to push the price to global recognition
                  turning other hodlers into millionaires in record time, our
                  low supply , utility and endorsements are pointers!
                </Text>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <Box className="usermap-block">
                <Image src={UserMapImage} alt="ThripleShiba user map" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default UserMap;
