import { Button, Flex, Input, Text } from "@chakra-ui/react"


const Newsletter = () => {
  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.700">
        <Text color="white" fontSize="3xl" mt={4}>Subscribe to our NewsLetter</Text>
        <Text color="white"  fontSize="lg"m={4}>Get updates on new releases, latest trends and many more..</Text>
        <Flex gap={6} m={4} width="100%" justifyContent="center" mb={8}>
            <Input type="email" placeholder="Enter your email address" color="white" size="lg" w={400}/>
            <Button size="lg" _hover={{bg:"teal.400", color:"white"}}>Subscribe</Button>
        </Flex>
    </Flex>
  )
}

export default Newsletter