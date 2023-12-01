import { Flex, Image, Text } from "@chakra-ui/react";
import { useCustomContext } from "../context/appContext";
import tryOn from "../utils/tryonFunction";

const TryOnCard= ({ product }) => {

  const { setData } = useCustomContext();

  return (
    <Flex flexDirection="column" borderRadius="0 0 5px 5px" color="whiteAlpha.900" bgGradient="linear(to-br, whiteAlpha.700, whiteAlpha.400)" cursor="pointer" onClick={() => {setData(tryOn(product.garment_id))}}>
      <Image src={product.garment_img_url} alt={product.name} width={200}/>
      <Text p={3} textAlign="center" color="gray.900" fontWeight={600}>{product.name.length > 15 ? `${product.name.slice(0,15)}...` : product.name}</Text>
    </Flex>
  )
}

export default TryOnCard;