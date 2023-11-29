import { Button, Flex, Image, Text } from "@chakra-ui/react"


const Details = () => {
  return (
    <Flex justifyContent="center"  gap={14} mt={14} mb={10} flexWrap="wrap">
        <Flex ml={2} mr={2} bg="white" width={500} alignItems="center" justifyContent="center">
            <Image src="https://media.revery.ai/revery_client_images/symbol_189014/in_origin.png" alt="product-image" width={400} />
        </Flex>
        <Flex flexDirection="column" width={500} m="2px 4px">
            <Text color="gray.400" fontSize="md">New Arrival</Text>
            <Text color="white" fontSize="4xl" mt={2} >Red Valentino</Text>
           
            <Text color="gray.300" fontSize="md" mt={5}>Elevate your wardrobe with our timeless striped button-up shirt. The crisp lines and tailored fit make it a versatile essential for both work and play. Crafted from breathable cotton, this shirt offers comfort and style in equal measure. Tuck it into a pencil skirt for a polished office look or wear it loose over jeans for a laid-back weekend vibe.</Text>
            <Text color="white" fontSize="xl" mt={5} mb={3}>Price</Text>
            <Flex>
                <Text color="gray.300" fontSize="md" margin= "6px 0">Quantity :</Text>
                <Button m="0 6px"
            borderRadius="50%"
            bg="whiteAlpha.100"
            fontWeight="bold"
            color="teal.200"
            _hover={{bg: "whiteAlpha.300"}}
          >
            -
          </Button>
          <span style={{ color: "white", margin: "6px 12px" }}>1</span>
          <Button m="0 6px"
            borderRadius="50%"
            bg="whiteAlpha.100"
            fontWeight="bold"
            color="teal.200"
            _hover={{bg: "whiteAlpha.300"}}
          >
            +
          </Button>

            </Flex>
            <Flex gap={10} m="35px 0">
                <Button borderRadius="none" color="white" bg="teal.500" fontSize="md" _hover={{bg:"teal.600"}}>Add to cart</Button>
                <Button borderRadius="none" color="gray.800" bg="white" fontSize="md" _hover={{bg:"gray.200"}}>Try On</Button>
            </Flex>
            <Flex gap={59}>
            <Text color="gray.400" fontSize="md">100% Original Goods</Text>
            <Text color="gray.400" fontSize="md">14 Days Free Return Exchange</Text>
            </Flex>
            <Flex gap={6}>
            <Text color="gray.400" fontSize="md">Cash On Delivery Available</Text>
            <Text color="gray.400" fontSize="md">Free Shipping on $75+</Text>
            </Flex>
            
        </Flex>
    </Flex>
  )
}

export default Details