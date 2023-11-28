// import { useEffect } from "react";
import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";

const CardComponent = ({ product }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      borderRadius={10}
      width={400}
    >
      <Box py={10} px={2}>
        <Image
          src={product.garment_img_url}
          alt="product-image"
          width={300}
          borderRadius={10}
        />
      </Box>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text color="gray.800" fontSize="2xl" pt={2} fontWeight="bold">
          Product Name
        </Text>
        <Text color="gray.600" fontSize="lg" pt={1} pb={3} fontWeight="500">
          Product Price
        </Text>
        <Button color="white" bg="red" fontSize="md" mb={8}>
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardComponent;
