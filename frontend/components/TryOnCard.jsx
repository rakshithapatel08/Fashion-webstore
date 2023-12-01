import { Flex, Image, Text } from "@chakra-ui/react";
import { useCustomContext } from "../context/appContext";
import axios from "axios";

const TryOnCard= ({ product }) => {  

  const { setData } = useCustomContext();

  const tryOn = (id,gender) => {
    axios
      .get(`http://localhost:3001/api/tryon?tops=${id}&&gender=${gender}`)
      .then((result) => {
        console.log(result.data)
        setData(result.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Flex flexDirection="column" borderRadius="0 0 5px 5px" color="whiteAlpha.900" bgGradient="linear(to-br, whiteAlpha.700, whiteAlpha.400)" cursor="pointer" onClick={()=>{tryOn(product.garment_id, product.gender)}}>
      <Image src={product.garment_img_url} alt={product.name} width={200}/>
      <Text p={3} textAlign="center" color="gray.900" fontWeight={600}>{product.name.length > 15 ? `${product.name.slice(0,15)}...` : product.name}</Text>
    </Flex>
  )
}

export default TryOnCard;