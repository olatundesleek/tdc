// import tripleShibaVideo from "../../assets/Tripleshibacommercial.mp4";
import { Box, Flex, Heading } from "@chakra-ui/react";
import howHighImage from "../../assets/images/howhigh.jpg";
function HowHigh() {
  return (
    <Flex
      marginTop="60px"
      marginBottom="30px"
      className="how-high-container  container "
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      <Flex
        className="how-high-text "
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize={{ base: "15px", md: "23px", lg: "25px" }}>
          HOW HIGH CAN A COIN REALLY <span className="gosapn">PUMP</span>?
        </Heading>
      </Flex>
      <Flex className="video-container col lg-6 md-12" flex="1">
        <video
          className="how-high-video"
          controls
          autoPlay
          id="bgvid"
          src="/video/Tripleshibacommercial.mp4"
          poster={howHighImage}
        ></video>
      </Flex>
    </Flex>
  );
}

export default HowHigh;
