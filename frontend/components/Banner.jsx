import { Flex, Text, Button, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <Flex m="50px" id="about" w="95%" flexDirection="column" justifyContent="center" alignItems="center">
        <Text textAlign="center" color="white"  fontSize="3xl">Fashion Partners</Text>
        <Text textAlign="center" color="white" fontSize="lg">Discover the latest trends in fashion at your fingertips! Elevate your style with our curated collection of chic and trendy outfits. Unleash your inner fashionista and shop the looks that turn heads. Your wardrobe upgrade starts here!</Text>
        <Flex w="100%" justifyContent="center" alignItems="center">
            
           

        </Flex>
        <Link to="/products"><Button>Explore more</Button></Link>
    </Flex>

  )
}

export default Banner