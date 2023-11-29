import { Flex, Image, useMediaQuery } from "@chakra-ui/react";

const CarouselCard = ({ image }) => {
  const [isMobile] = useMediaQuery("(max-width: 950px)");
  const [isTab] = useMediaQuery("(max-width: 1280px)");

  return (
    <Flex
      w={isMobile ? 280 : isTab ? 260 : 380}
      h={isMobile ? 300 : isTab ? 280 : 400}
      borderRadius={8}
      bg="white"
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(20px)"
      background="rgb(228 228 228 / 15%)"
      boxShadow="0px 10px 15px 10px rgba(0, 0, 0, 0.2)"
      sx={{ WebkitBackdropFilter: "blur(8px)" }}
    >
      <Image
        src={image}
        alt="carousel-image"
        h={isMobile ? 220 : isTab ? 200 : 300}
        borderRadius={10}
      />
    </Flex>
  );
};

export default CarouselCard;
