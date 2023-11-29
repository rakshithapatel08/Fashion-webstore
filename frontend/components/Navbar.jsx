import {
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isMobileTab] = useMediaQuery("(max-width: 700px)");

  return (
    <Box>
      <Flex
        flexWrap="wrap"
        borderRadius="5px"
        py={2}
        px={6}
        sx={{
          background: "linear-gradient(to right bottom, #1A202C, #4A5568)",
        }}
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top={8}
        w="95%"
        left="50%"
        transform="translate(-50%)"
        zIndex="100"
      >
        <Link href="/">
          <Text fontSize="3xl" color="whiteAlpha.700" fontWeight="bold">
            STEAL
            <Box as="span" color="teal.400">
              TEAL
            </Box>
          </Text>
        </Link>
        {isMobileTab ? (
          <MenuComponent />
        ) : (
          <UnorderedList
            display="flex"
            gap={10}
            fontSize="lg"
            color="whiteAlpha.800"
            justifyContent="space-between"
            alignItems="center"
            listStyleType="none"
          >
            <Link to="/">
              <ListItem _hover={{ color: "teal.400" }}>Home</ListItem>
            </Link>
            <Link to="#about">
              <ListItem _hover={{ color: "teal.400" }}>About</ListItem>
            </Link>
            <Link to="/products">
              <ListItem _hover={{ color: "teal.400" }}>Collections</ListItem>
            </Link>
            <Flex fontSize="2xl" alignItems="center" color="teal.500"> 
              <Icon as={MdShoppingCart} />
            </Flex>
          </UnorderedList>
        )}
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Navbar;
