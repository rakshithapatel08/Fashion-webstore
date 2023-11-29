import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";

const CartCard = ({ cartItem }) => {
  return (
    <Flex
      flexDirection="row"
      w="100%"
      bg="whiteAlpha.200"
      width={320}
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={cartItem.garment_img_url} alt={cartItem.desc} w={100} />
      <Flex flexDirection="column" mr="40px" gap={1}>
        <Text fontSize="md">{cartItem?.name || "productName"}</Text>
        <Text fontSize="xl" color="teal.400" fontWeight="bold">
          ${cartItem?.price || "productPrice"}
        </Text>
        <Box>
          <Button
            borderRadius="50%"
            bg="whiteAlpha.100"
            fontWeight="bold"
            color="teal.200"
            _hover={{bg: "whiteAlpha.300"}}
          >
            -
          </Button>
          <span style={{ color: "white", margin: "0 10px" }}>{1}</span>
          <Button
            borderRadius="50%"
            bg="whiteAlpha.100"
            fontWeight="bold"
            color="teal.200"
            _hover={{bg: "whiteAlpha.300"}}
          >
            +
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartCard;
