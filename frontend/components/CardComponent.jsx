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
      }}
      borderRadius={10}
      width={300}
      minH={450}
      py={6}
    >
      <Box py={5} >
        <Image
          src={product.garment_img_url}
          alt="product-image"
          width={200}
          borderRadius={10}
          mt={1}
        />
      </Box>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text color="gray.800" fontSize="2xl" pt={1} fontWeight="bold">
          Product Name
        </Text>
        <Text color="gray.300" fontSize="lg" pb={2} fontWeight="500">
          Product Price
        </Text>
        <Text color="gray.200" fontSize="sm" pb={5} fontWeight="500">
          Product Description
        </Text>
        <Flex flexWrap="wrap" gap={4} pb={4}>
        <Button borderRadius="none" color="white" bg="teal.500" fontSize="md" _hover={{bg:"teal.600"}}>
          Add to Cart
        </Button>
        <Button borderRadius="none" color="gray.800" bg="white" fontSize="md" _hover={{bg:"gray.200"}}>
          Try On
        </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardComponent;
