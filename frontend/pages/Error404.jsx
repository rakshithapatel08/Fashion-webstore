import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" minH="70vh">        
        <Image src="/iconAssets/404.svg" alt="404-error-image" width={600}/>
        <Text color="whiteAlpha.700" mt={2} mb={6}>Could not find what you are looking for.</Text>
        <Link to="/"><Button color="white" backgroundColor="teal.400" p={4} _hover={{bg:"white", color:"black"}}>Go Back To Safety</Button></Link>
    </Flex>
  )
}

export default Error404;