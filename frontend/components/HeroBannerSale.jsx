import {
  Box,
  Heading,
  Button,
  Image,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import heroBanner from "../iconAssets/heroBanner.svg";
import { Link } from "react-router-dom";

const HeroBannerSale = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const [isMiniTab] = useMediaQuery("(max-width: 800px)");
  const [isTab] = useMediaQuery("(max-width: 1000px)");
  const [isLessThan1280] = useMediaQuery("(max-width: 1280px)");
  const [is1200To1400] = useMediaQuery("(max-width: 1500px)");
  const [isLess1600] = useMediaQuery("(max-width: 1600px)");

  return (
    <Flex
      flexDirection={isMiniTab ? "column-reverse" : "row"}
      bgGradient="linear(to-br, gray.800, gray.600)"
      mx={
        isMobile
          ? 0
          : isMiniTab
          ? 100
          : isLessThan1280
          ? 0
          : isLess1600
          ? 100
          : 150
      }
      mt={50}
      mb={0}
      p={10}
      borderRadius={4}
      minH={300}
      justifyContent={"space-between"}
      alignItems={isMiniTab && "center"}
    >
      <Flex
        flexDirection="column"
        alignItems={isMiniTab && "center"}
        mt={isMiniTab && "70px"}
      >
        <Heading
          color="whiteAlpha.800"
          fontSize={isMobile ? "3xl" : isTab ? "4xl" : "5xl"}
        >
          Winter Fashion Sale
        </Heading>
        <Text
          fontSize={isMobile ? "5xl" : is1200To1400 ? "6xl" : "8xl"}
          color="teal.400"
          fontWeight="800"
          mb={2}
        >
          Hurry Up!
        </Text>
        <Flex flexDirection="column" alignItems={isMiniTab && "center"}>
          <Text
            fontSize={isTab ? "xl" : "2xl"}
            my={4}
            color="whiteAlpha.600"
            textAlign={isMobile && "center"}
          >
            Upto <span style={{ color: "#38B2AC" }}>20% off</span> on your
            favourite brands
          </Text>
          <Text
            fontSize={isTab ? "md" : "lg"}
            textAlign={isMiniTab && "center"}
            mt={4}
            mb={8}
            color="whiteAlpha.900"
            w={"80%"}
          >
            Time is of the essence! Our Winter Sale is a fleeting moment of
            sartorial bliss, and you don't want to miss out on these
            irresistible deals.
          </Text>
          <Link to="/products">
            <Button
              size="lg"
              type="submit"
              bg="teal.400"
              color="white"
              _hover={{ bg: "teal.500" }}
            >
              Shop Now
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Image src={heroBanner} width={isTab ? 300 : is1200To1400 ? 400 : 600} />
    </Flex>
  );
};

export default HeroBannerSale;
