import { Flex, Text, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Banner = () => {

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex px={isMobile? 0 : 10} my={10} id="about" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
        <Text textAlign="center" color="white"  fontSize="3xl">Fashion Partners</Text>
        <Text textAlign="center" color="white" fontSize="lg" m={6}>Discover the latest trends in fashion at your fingertips! Elevate your style with our curated collection of chic and trendy outfits. Unleash your inner fashionista and shop the looks that turn heads. Your wardrobe upgrade starts here!</Text>
        <Flex flexWrap="wrap" w="100%" justifyContent="center" alignItems="center" gap={6} m={isMobile? 0 : 5}>   
            <Image className="svg-image" src="/iconAssets/calvin.png" width="100px" height="100px" p={4} m={4}/>
            <Image className="svg-image" src="/iconAssets/gucci.png" width="100px" p={4} m={4}/>
            <Image className="svg-image" src="/iconAssets/louis-vuitton.png" width="100px" p={5} m={4}/>
            <Image className="svg-image" src="/iconAssets/lacoste.png" width="100px" height="100px" m={4} />
            <Image className="svg-image" src="/iconAssets/adidas.png" width="100px"  height="100px" m={4}/>
            <Image className="svg-image" src="/iconAssets/chanel.png" width="100px"  height="100px"  p={2} m={4}/>
            <Image className="svg-image" src="/iconAssets/levi.png" width="100px" height="100px" p={2} m={isMobile ? 0 : 4}/>      
        </Flex>
        <Link to="/products"><Button mt={4} _hover={{bg:"teal.400", color:"white"}}>Explore more</Button></Link>
    </Flex>

  )
}

export default Banner