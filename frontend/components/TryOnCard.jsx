import { Flex, Image, Text } from "@chakra-ui/react";

const TryOnCard= ({ product }) => {
  return (
    <Flex flexDirection="column" borderRadius="0 0 5px 5px" color="whiteAlpha.900" bgGradient="linear(to-br, whiteAlpha.700, whiteAlpha.400)">
      <Image src={product.garment_img_url} alt={product.name} width={200}/>
      <Text p={3} textAlign="center" color="gray.900" fontWeight={600}>{product.name}</Text>
    </Flex>
  )
}

export default TryOnCard;