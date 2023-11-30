import { Text, Flex, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" >
        <Image src="../iconAssets/Payment.gif" mt={0}/> 
        <Text fontSize="3xl" color="teal.400" mb={4}>Thank You for Shopping at StealTeal</Text>
        <Text fontSize="lg" color="white" mb={4}>Payment Completed Successfully!</Text>
        <Link to="/products"><Button borderRadius="0"
          _hover={{ bg: "teal.400", color: "white" }}>Continue Shopping</Button></Link>
    </Flex>
  )
}

export default Success