import { Box, Button, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import CartCard from "./CartCard";
import { CloseIcon } from "@chakra-ui/icons";
import { useCustomContext } from "../context/appContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTab] = useMediaQuery("(max-width: 1000px)");
  const { setShowCart, totalQty, totalPrice, cartData } = useCustomContext();
  
  const handleBuy = () => {
    axios.post("http://localhost:3001/api/payment", cartData)
    .then(session => session.data)
    .then(data => {
      if(data.url) {
        window.location.href = data.url;
      }
    })
    .catch(error => console.log(error));
  }

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
      h="90%"
    >
      <Icon as={CloseIcon} position="absolute" right="4%" top="4%" cursor="pointer" onClick={() => setShowCart(false)}/> 
      <Flex gap={4} alignItems="center" justifyContent="center" p={4}>
        <Text fontSize="2xl">Cart Items</Text>
        <Text fontSize="md" color="gray.200">({totalQty} items)</Text>
      </Flex>
      {
        cartData.length === 0 ? 
        <Flex flexDirection="column" gap={4} justifyContent="center" alignItems="center" minH="60%">
          <Icon as={MdShoppingCart} fontSize="5xl" color="teal.200"/>
          <Text color="whiteAplha.800" fontSize="xl">No Items in the Cart Yet</Text>
          <Link href="/"><Button size="lg" _hover={{bg:"teal.400", color:"white"}} onClick={() => setShowCart(false)}>Go Shopping</Button></Link>
        </Flex>: 
        <Flex flexDirection="column" mt={5} mb={150} gap={4} maxH="60%" overflowY="scroll">
          {cartData.map((cartItem, index) => (
            <CartCard key={cartItem?._id || index} cartItem={cartItem} />
          ))}
        </Flex>
      }
      
      <Box
        position="absolute"
        bgGradient="linear(to-br, gray.900, gray.700)"
        bottom={0}
        w="100%"
        textAlign="center"
      >
        <Flex justifyContent="space-between" w="60%" m="auto" py={4}>
          <Text>Subtotal</Text>
          <Text>${totalPrice}</Text>
        </Flex>
        <Button 
          onClick={handleBuy}
          w="40%"
          borderRadius="0"
          _hover={{ bg: "teal.400", color: "white" }}
          mb={6}
          isDisabled={cartData.length === 0 ? true : false}
        >
          Buy Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Cart;
