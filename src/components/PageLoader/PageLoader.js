import loadingImage from "../../assets/images/shiba png logo.png";
// import loadingVideo from "../../assets/images/shiba png logo.png";
import { Box, Flex } from "@chakra-ui/react";

function PageLoader() {
  return (
    <Flex className="pageloader" justifyContent="center" alignItems="center">
      <Box>
        <div class="loadingio-spinner-eclipse-zl7e37gfeu">
          <div class="ldio-ofepydou27">
            <div></div>
          </div>
        </div>
        <img src={loadingImage} className="pageloader-img" />
      </Box>
    </Flex>
  );
}

export default PageLoader;
