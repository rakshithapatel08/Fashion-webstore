import { Button, Flex, Input, Text, useMediaQuery } from "@chakra-ui/react"


const Newsletter = () => {

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.700" p={4}>
        <Text color="white" fontSize={isMobile? "2xl" : "3xl"} mt={4}>Subscribe to our NewsLetter</Text>
        <Text color="white"  fontSize={isMobile? "md" : "lg"} m={4}>Get updates on new releases, latest trends and many more..</Text>
        <Flex flexWrap="wrap" gap={6} m={4} width="100%" justifyContent="center" alignItems="center" mb={8}>
            <Input type="email" placeholder="Enter your email address" color="white" size="lg" w={400}/>
            <Button size="lg" _hover={{bg:"teal.400", color:"white"}}>Subscribe</Button>
        </Flex>
    </Flex>
  )
}

export default Newsletter;