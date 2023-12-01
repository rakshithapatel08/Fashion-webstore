import { Box, Heading, Button, Text } from "@chakra-ui/react"

const HeroBannerSale = () => {
  return (
   <Box bgGradient="linear(to-br, gray.800, gray.600)" mx={150} mt={50} mb={0} p={10} borderRadius={4} minH={300}>
    <Heading color="whiteAlpha.800">Winter Fashion Sale</Heading>
    <Button size="lg" type="submit" bg="teal.400" color="white" _hover={{ bg:"teal.500"}}>Shop Now</Button>
   </Box>
  )
}

export default HeroBannerSale