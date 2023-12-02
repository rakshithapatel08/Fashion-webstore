import { Text, Flex, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCustomContext } from "../context/appContext";
import { useEffect } from "react";
import confettiFunction from "../utils/confetti";

const Success = () => {

  const {setCartData, setTotalQty, setTotalPrice} = useCustomContext();
  const [ isMobile ] = useMediaQuery("(max-width:600px)");
 
  useEffect(() => {
    localStorage?.clear();
    setCartData([]);
    setTotalQty(0);
    setTotalPrice(0);
    confettiFunction();
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" >
        <Image src="../iconAssets/Payment.gif" mt={0}/> 
        <Text fontSize="3xl" color="teal.400" mb={4} mx={isMobile && 2} textAlign={isMobile && "center"}>Thank You for Shopping at StealTeal</Text>
        <Text fontSize="lg" color="white" mb={4}>Payment Completed Successfully!</Text>
        <Link to="/products"><Button borderRadius="0"
          _hover={{ bg: "teal.400", color: "white" }}>Continue Shopping</Button></Link>
    </Flex>
  )
}

export default Success