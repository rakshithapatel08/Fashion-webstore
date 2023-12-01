import { Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { useCustomContext } from "../context/appContext";
import { Link } from "react-router-dom";

const Details = ({ product }) => {

    const { qty, setQty, handleAdd } = useCustomContext();
    const [ isMobile ] = useMediaQuery("(max-width: 600px)");
    
    return (
        <Flex justifyContent="center" mx={isMobile && 4} gap={14} mt={14} mb={10} flexWrap="wrap">
            <Flex ml={2} mr={2} bg="white" width={500} alignItems="center" justifyContent="center">
                <Image src={product?.garment_img_url} alt="product-image" width={400} />
            </Flex>
            <Flex flexDirection="column" width={500} m="2px 4px">
                <Text color="gray.400" fontSize="md">New Fashionista</Text>
                <Text color="white" fontSize="4xl" mt={2} >{product.name}</Text>
                <Text color="gray.300" fontSize="md" mt={5}>{product.desc}</Text>
                <Text color="teal.400" fontSize="xl" mt={5} mb={3}>${product.price}</Text>
                <Flex>
                    <Text color="gray.300" fontSize="md" margin="6px 0">Quantity :</Text>
                    <Button m="0 6px" onClick={() => qty > 1 && setQty(qty-1)}
                        borderRadius="50%"
                        bg="whiteAlpha.100"
                        fontWeight="bold"
                        color="teal.200"
                        _hover={{ bg: "whiteAlpha.300" }}
                    >
                        -
                    </Button>
                    <span style={{ color: "white", margin: "6px 12px" }}>{qty}</span>
                    <Button m="0 6px" onClick={() => setQty(qty+1)}
                        borderRadius="50%"
                        bg="whiteAlpha.100"
                        fontWeight="bold"
                        color="teal.200"
                        _hover={{ bg: "whiteAlpha.300" }}
                    >
                        +
                    </Button>
                </Flex>
                <Flex gap={10} m="35px 0">
                    <Button borderRadius="none" color="white" bg="teal.500" fontSize="md" _hover={{ bg: "teal.600" }} onClick={()=>handleAdd(product, qty)} w={115}>Add to cart</Button>
                    {product.category === "tops" && <Link to="/tryon"><Button borderRadius="none" color="gray.800" bg="white" fontSize="md" _hover={{ bg: "gray.200" }} w={115}>Try On</Button></Link>}
                </Flex>
                <Flex justifyContent="space-between" alignItems="flex-start">
                    <Text color="gray.400" fontSize="md" w={isMobile ? "40%" : "50%"}>100% Original Goods</Text>
                    <Text color="gray.400" fontSize="md" w={isMobile ? "40%" : "50%"}>14 Days Free Return Exchange</Text>
                </Flex>
                <Flex mt={isMobile && 4} justifyContent="space-between" alignItems="flex-start">
                    <Text color="gray.400" fontSize="md" w={isMobile ? "40%" : "50%"}>Cash On Delivery Available</Text>
                    <Text color="gray.400" fontSize="md" w={isMobile ? "40%" : "50%"}>Free Shipping on $75+</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Details;