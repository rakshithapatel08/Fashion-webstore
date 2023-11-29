import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";
import { useCustomContext } from "../context/appContext";

const CartCard = ({ cartItem }) => {
  const { handleInc, handleDec } = useCustomContext();
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
        <Text fontSize="md">{cartItem?.name?.length > 10 ? `${cartItem?.name.slice(0,10)}...` :  cartItem?.name || "productName"}</Text>
        <Text fontSize="xl" color="teal.400" fontWeight="bold">
          ${cartItem?.price || "productPrice"}
        </Text>
        <Box>
          <Button onClick={()=>handleDec(cartItem)}
            borderRadius="50%"
            bg="whiteAlpha.100"
            fontWeight="bold"
            color="teal.200"
            _hover={{bg: "whiteAlpha.300"}}
          >
            -
          </Button>
          <span style={{ color: "white", margin: "0 10px" }}>{cartItem?.quantity}</span>
          <Button onClick={()=>handleInc(cartItem)}
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
