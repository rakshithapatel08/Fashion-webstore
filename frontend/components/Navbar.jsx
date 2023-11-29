import { Flex, UnorderedList, ListItem, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
    <Flex flexWrap="wrap" borderRadius="5px" py={2} px={6} bg="white" justifyContent="space-between" alignItems="center" position="absolute" top={8} w="95%" left="50%" transform="translate(-50%)">
      <Link href="/"><Text fontSize="3xl" color="gray.800" fontWeight="bold">STEAL<Box as="span" color="teal.400">TEAL</Box></Text></Link>
      <UnorderedList display="flex" gap={10} fontSize="lg" color="gray.800" justifyContent="space-between" alignItems="center" listStyleType="none">
        <Link to="/"><ListItem _hover={{ color: "teal.400" }}>Home</ListItem></Link>
        <Link to="#about"><ListItem _hover={{ color: "teal.400" }}>About</ListItem></Link>
        <Link to="/products"><ListItem _hover={{ color: "teal.400" }}>Collections</ListItem></Link>
        <ListItem><Image src="../iconAssets/cart.png"/></ListItem>
      </UnorderedList>
    </Flex>
      <Outlet />
    </Box>
  )
}

export default Navbar;