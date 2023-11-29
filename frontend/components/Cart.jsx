import { Box, Button, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import CartCard from "./CartCard";
import { CloseIcon } from "@chakra-ui/icons";
import { useCustomContext } from "../context/appContext";

const Cart = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTab] = useMediaQuery("(max-width: 1000px)");
  const { setShowCart } = useCustomContext();

  const cartTemp = {
    garment_img_url:
      "https://media.revery.ai/revery_client_images/symbol_189014/in_origin.png",
    name: "product",
    price: 89,
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      color="white"
      bgGradient="linear(to-br, gray.900, gray.700)"
      w={isMobile ? "100%" : isTab ? "70%" : "40%"}
      position="fixed"
      zIndex={200}
      top="5%"
      left="50%"
      transform="translate(-50%)"
      maxH="90%"
    >
      <Icon as={CloseIcon} position="absolute" right="4%" top="4%" cursor="pointer" onClick={() => setShowCart(false)}/> 
      <Flex gap={4} alignItems="center" jusytifyContent="center" p={4}>
        <Text fontSize="2xl">Cart Items</Text>
        <Text fontSize="md" color="gray.200">(0 items)</Text>
      </Flex>
      <Flex flexDirection="column" mt={5} mb={150} gap={4} h="60%" overflowY="scroll">
        {[cartTemp, cartTemp, cartTemp, cartTemp, cartTemp].map((cartItem, index) => (
          <CartCard key={cartItem?._id || index} cartItem={cartItem} />
        ))}
      </Flex>
      <Box
        position="absolute"
        bgGradient="linear(to-br, gray.900, gray.700)"
        bottom={0}
        w="100%"
        textAlign="center"
      >
        <Flex justifyContent="space-between" w="60%" m="auto" py={4}>
          <Text>Subtotal</Text>
          <Text>TotalPrice</Text>
        </Flex>
        <Button
          w="40%"
          borderRadius="0"
          _hover={{ bg: "teal.400", color: "white" }}
          mb={6}
        >
          Buy Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Cart;
