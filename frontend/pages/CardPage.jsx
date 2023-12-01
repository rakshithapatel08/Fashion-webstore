import { useEffect, useState } from "react"
import axios from "axios"
import CardComponent from "../components/CardComponent"
import { Flex, Text, Box, useMediaQuery } from "@chakra-ui/react"

const CardPage = () => {
    const [data, setData] = useState(null);
    const [ isMobile ] = useMediaQuery("(max-width: 600px)");
    
    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
            .then((res) => setData(res.data))
    }, [])

    if(!data){
        return "loading ..."
    }

    return (
        <Flex flexWrap="wrap" flexDirection="column">
            <Box>
            <Text p={10} textAlign={isMobile && "center"} fontSize="4xl" color="whiteAlpha.700" fontWeight="bold">Women Collections</Text>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={10}>
                {data?.map((product) => product.gender === "female" && <CardComponent product={product} key={product._id}/>)}
            </Flex>
            </Box>
            <Box>
            <Text p={10} textAlign={isMobile && "center"} fontSize="4xl" color="whiteAlpha.700" fontWeight="bold">Men Collections</Text>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={10}>
                {data?.map((product) => product.gender === "male" && <CardComponent product={product} key={product._id}/>)}
            </Flex>
            </Box>
        </Flex>
    )
}

export default CardPage