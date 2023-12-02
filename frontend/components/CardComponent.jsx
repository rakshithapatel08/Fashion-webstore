import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import { useCustomContext } from "../context/appContext";
import { Link } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

const CardComponent = ({ product }) => {

  const { qty, handleAdd, setQty, setData, setIsFemale, setIsClicked } = useCustomContext();
    
  useEffect(()=>{
    setQty(1)
  },[]);

  const tryOn = (id, gender) => {
    axios
      .get(`/api/tryon?tops=${id}&&gender=${gender}`)
      .then((result) => {
        setData(result.data);
        setIsClicked(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
      background="whiteAlpha.100"
      width={340}
      minH={450}
      pb={6}
    >
      <Box pb={5} >
        <Link to={`/products/${product._id}`}>
        <Image
          src={product.garment_img_url}
          alt="product-image"
          width={340}
          height={250}
          objectFit="contain"
          background="white"
        />
        </Link>
      </Box>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text color="white" fontSize="2xl" pt={1} fontWeight="600">
          {product.name}
        </Text>
        <Text color="gray.500" fontSize="lg" pb={2} fontWeight="500">
          ${product.price}
        </Text>
        <Text color="gray.200" fontSize="sm" pb={5} fontWeight="500">
          {product.desc.slice(0,30)}...
        </Text>
        <Flex flexWrap="wrap" gap={4} pb={4} justifyContent="center">
        <Button borderRadius="none" color="white" bg="teal.500" fontSize="md" _hover={{bg:"teal.600"}} 
        onClick={()=>{
          handleAdd(product, qty)       
          }}>
          Add to Cart
        </Button>
        {
          product.category === "tops" && 
          <Link to="/tryon">
            <Button borderRadius="none" color="gray.800" bg="white" fontSize="md" _hover={{bg:"gray.200"}} onClick={() => {
              tryOn(product.garment_id, product.gender)
              setIsFemale(product.gender === "female" ? true : false)
              setIsClicked(true)
            }}>
              Try On
            </Button>
          </Link>
        }
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardComponent;
