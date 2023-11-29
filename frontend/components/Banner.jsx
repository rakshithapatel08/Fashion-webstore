import { Flex, Text, Button, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <Flex m="50px" id="about" w="95%" flexDirection="column" justifyContent="center" alignItems="center">
        <Text textAlign="center" color="white"  fontSize="3xl">Fashion Partners</Text>
        <Text textAlign="center" color="white" fontSize="lg" m={6}>Discover the latest trends in fashion at your fingertips! Elevate your style with our curated collection of chic and trendy outfits. Unleash your inner fashionista and shop the looks that turn heads. Your wardrobe upgrade starts here!</Text>
        <Flex w="100%" justifyContent="center" alignItems="center" gap={6} m={5}>
            
            <Image src="../iconAssets/ck.png" width="100px" height="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/gucci.png" width="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/hm.svg" width="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/lacoste.png" width="100px" height="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/levis.png" width="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/lv.png" width="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>
            <Image src="../iconAssets/zara.png" width="100px" height="100px" bg="gray.200" borderRadius="5px" p={3} m={4}/>      
           
        </Flex>
        <Link to="/products"><Button _hover={{bg:"teal.400", color:"white"}}>Explore more</Button></Link>
    </Flex>

  )
}

export default Banner