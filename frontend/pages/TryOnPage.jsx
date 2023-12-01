import { useEffect, useState } from "react";
import { Image, Box, Flex, Heading, Icon, IconButton, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import TryOnCard from "../components/TryOnCard";
import { MdMale, MdFemale } from "react-icons/md";
import { useCustomContext } from "../context/appContext";

const TryOnPage = () => {
    const [ isMobile ] = useMediaQuery("(max-width: 600px)");
    const [products, setProducts] = useState([]);
    const { data, isFemale, setIsFemale } = useCustomContext();

    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
            .then((res) => setProducts(res.data))
    }, []);

    // data?.model_meta?.model_file
    console.log(products);

    return (

        <Box my={10}>
        <Heading textAlign="center" bgGradient="linear(to-br, gray.700, gray.200)" bgClip="text" pb={2}>Virtual Dressing Room</Heading>
        <Flex
            gap={20}
            color='blackAlpha.700'
            fontWeight='bold'
            m={10}
            flexWrap="wrap"
            justifyContent="center"
        >
            <Flex flexDirection="column" flexWrap="wrap" gap={6}>
            <Box margin="auto" position="relative">
                <IconButton fontSize="2xl" m={1} icon={isFemale ? <MdMale/> : <MdFemale/>} color="whiteAlpha.800" borderRadius={2} background="gray.800" onClick={() => setIsFemale(!isFemale)} position="absolute" top={2} left={2} _hover={{background: "#171923", color: "#38B2AC", cursor: "pointer"}}/>
                <Image borderRadius={4} src={ data?.model_metadata?.model_file ? `https://media.revery.ai/generated_model_image/${data?.model_metadata?.model_file}.png` : "https://media.revery.ai/generated_model_image/1697455153;ea5b690653ec2ecaf15cba2a84bc899d_P6ASVORCbQYT-ea5b690653ec2ecaf15cba2a84bc899d_LoItYoKztjWy;1701356476356805.png"} h={isMobile ? "60vh" : "80vh"} alt="try-on-model-image" />
            </Box>
            </Flex>
            <Flex h="80vh" flexWrap="wrap" w={!isMobile && "50%"} gap={6} overflowY="scroll" justifyContent="center" alignItems="center" bgGradient="linear(to-br, gray.800, gray.700)" p={10}>
                {
                    products.map((product, index) => {
                        if(isFemale && product.gender === "female") {
                            return <TryOnCard key={product._id || index} product={product}/>
                        } else if (!isFemale && product.gender === "male") {
                            return <TryOnCard key={product._id || index} product={product}/>
                        }
                    })
                }
            </Flex>
        </Flex>
        </Box>
    )
}

export default TryOnPage;