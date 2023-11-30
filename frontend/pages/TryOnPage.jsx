import { useEffect, useState } from "react";
import { Image, Box, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import axios from "axios";
import TryOnCard from "../components/TryOnCard";
import { MdMale, MdFemale } from "react-icons/md";

const TryOnPage = () => {
    const [data, setData] = useState(null);
    const [gender, setGender] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/api/tryon")
            .then(result => {
                console.log(result.data)
                setData(result.data)
            })
            .catch(error => console.log(error));
    }, []);

    // data?.model_meta?.model_file

    if (!data) {
        return "Loading..."
    }

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
                <IconButton fontSize="2xl" m={1} icon={gender ? <MdMale/> : <MdFemale/>} color="whiteAlpha.800" borderRadius={2} background="gray.800" onClick={() => setGender(!gender)} position="absolute" top={2} left={2} _hover={{background: "#171923", color: "#38B2AC", cursor: "pointer"}}/>
                <Image borderRadius={4} src={"https://media.revery.ai/generated_model_image/1697455153;ea5b690653ec2ecaf15cba2a84bc899d_P6ASVORCbQYT-ea5b690653ec2ecaf15cba2a84bc899d_LoItYoKztjWy;1701356476356805.png"} h="80vh" alt="try-on-model-image" />
            </Box>
            </Flex>
            <Flex h="80vh" flexWrap="wrap" w="50%" gap={6} overflowY="scroll" justifyContent="center" alignItems="center" bgGradient="linear(to-br, gray.800, gray.700)" p={10}>
                {
                    [{garment_img_url: "https://media.revery.ai/revery_client_images/symbol_185650/in_origin.png", name: "Shirt"}, {garment_img_url: "https://media.revery.ai/revery_client_images/symbol_185650/in_origin.png", name: "Shirt"}, {garment_img_url: "https://media.revery.ai/revery_client_images/symbol_185650/in_origin.png", name: "Shirt"}, {garment_img_url: "https://media.revery.ai/revery_client_images/symbol_185650/in_origin.png", name: "Shirt"}].map((tryOnImage, index) => <TryOnCard key={tryOnImage._id || index} product={tryOnImage}/>)
                }
            </Flex>
        </Flex>
        </Box>
    )
}

export default TryOnPage;